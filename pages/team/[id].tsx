import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { db } from '../../api/firebase';
import TeamMember from '../../components/team_member';
import NotFound from '../../components/not_found';
import LoadingIndicator from '../../components/loading';
import { doc } from 'firebase/firestore';
import getData from '../../api/fetcher';
import { FaXTwitter } from 'react-icons/fa6';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { TbWorld } from 'react-icons/tb';
import Head from 'next/head';

function TeamMemberPage() {
    const router = useRouter();
    const { id } = router.query;
    const route = router.asPath;

    const [member, setMember] = useState<TeamMember | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        if (id) {
            const teamMember = doc(db, 'teammembers', `${id}`.toString().toLowerCase());
            getData<TeamMember>(teamMember).then((data) => {
                setMember(data);
                setIsLoading(false);
            });
        }
    }, [id]);

    if (isLoading) return (<div className="gradientbg"> <LoadingIndicator /> </div>);
    if (!member) return (<NotFound slog={`Couldn't connect the dots for "insolite.io${route}"`} />);

    return (
        <>
            <Head>
                <title>{`Insolite Team | ${member.name}`}</title>
                <meta name="description" content={`Page about ${member.name}, team member of Insolite`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:image" content={member.image} />
                <link rel="icon" href="/insolite-logo.png" />
            </Head>
            <div className="gradientbg-1">
                <div className="gradientbg-content">
                    <img
                        src={member.image}
                        alt={`${member.name}'s profile picture`}
                        className="team-member-image"
                    />
                    <div className="spacerBottom" />
                    <h1>{member.name}</h1>
                    <a href={`mailto:${member.email}`} className="text-white text-opacity-30">{member.email}</a>
                    <div className="paddingBottom" />
                    <div className="team-member-data" dangerouslySetInnerHTML={{ __html: member?.data || '' }} />
                    <div className="paddingBottom" />
                    <div className="social-icons">
                        {member.github && (
                            <a href={member.github} target="_blank" rel="noopener noreferrer">
                                <AiFillGithub className="teamicon" />
                            </a>
                        )}
                        {member.linkedin && (
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                <AiFillLinkedin className="teamicon" />
                            </a>
                        )}
                        {member.x && (
                            <a href={member.x} target="_blank" rel="noopener noreferrer">
                                <FaXTwitter className="teamicon" />
                            </a>
                        )}
                        {member.website && (
                            <a href={member.website} target="_blank" rel="noopener noreferrer">
                                <TbWorld className="teamicon" />
                            </a>
                        )}
                    </div>
                    <div className="spacerBottom" />
                </div>

            </div>
        </>
    );
};

export default TeamMemberPage;
