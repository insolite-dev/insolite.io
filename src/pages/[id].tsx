import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { db } from '../api/firebase';
import TeamMember from '../components/team_member';
import NotFound from '../components/not_found';
import { doc } from 'firebase/firestore';
import getDoc from '../api/fetcher';


const TeamMemberPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const [member, setMember] = useState<TeamMember | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!id) {
            setIsLoading(false);
            return;
        }

        const teamMember = doc(db, 'teammembers', id.toString().toLowerCase());
        const fetchData = async () => {
            try {
                const snap = await getDoc<TeamMember>(teamMember);
                setMember(snap);
                setIsLoading(false);
            } catch (error) {
                console.error('Could not fetch data', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (isLoading) return (<div className="loader"></div>);
    if (!member) return (<NotFound params={id} />)
    return (
        <div>
            <h2>{member.name}</h2>
            <p>Email: {member.email}</p>
            {/* TODO: implement details */}
        </div>
    );
};

export default TeamMemberPage;
