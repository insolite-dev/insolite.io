import NotFound from "@/components/not_found";
import { useRouter } from "next/router";

const NotFoundPage = () => {
    const router = useRouter();
    const { id } = router.query;
    return (<div className="gradientbg"> <NotFound params={id} /> </div>);
}

export default NotFoundPage;
