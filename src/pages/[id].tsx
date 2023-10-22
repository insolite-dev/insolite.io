import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { db } from '../api/firebase';
import TeamMember from '../components/team_member';
import NotFound from '../components/not_found';
import LoadingIndicator from '../components/loading';
import { doc } from 'firebase/firestore';
import getData from '../api/fetcher';

const TeamMemberPage = () => {
    const router = useRouter();
    const { id } = router.query;

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
    if (!member) return (<div className="gradientbg"> <NotFound params={id} /> </div>);

    return (
        <div className="gradientbg">
            <h2>{member.name}</h2>
            <p>Email: {member.email}</p>
        </div>
    );
};

export default TeamMemberPage;
