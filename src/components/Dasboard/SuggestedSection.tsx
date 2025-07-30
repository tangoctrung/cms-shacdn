import { useEffect, useState } from 'react';
import UserRetentionChart from './Components/UserRetentionChart';
import NewUsersByChannelChart from './Components/NewUsersByChannelChart';
import UserActivityChart from './Components/UserActivityChart';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

export default function SuggestedSection({
    data,
    distanceDate
}: {
    data: any;
    distanceDate: number;
}) {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const frame = requestAnimationFrame(() => setReady(true));
        return () => cancelAnimationFrame(frame);
    }, []);

    if (!ready) return null;
    console.log("distanceDate", data?.userRetention?.length, distanceDate);

    return (
        <div className="w-full overflow-hidden">
            <Carousel>
                <CarouselContent>
                    <CarouselItem className="basis-2/5">
                        <div className="w-full shadow-md overflow-hidden h-[440px]">
                            <UserRetentionChart data={data?.userRetention} />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-2/5">
                        <div className="w-full shadow-md overflow-hidden h-[440px]">
                            <NewUsersByChannelChart data={data?.newUsersByChannel || []} />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-2/5">
                        <div className="w-full shadow-md overflow-hidden h-[440px]">
                            <UserActivityChart data={data?.userActivityOverTime} />
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div >
    );
}
