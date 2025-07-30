import { Card } from '@/components/ui/card';
import LineRoundChart from '../../Chart/LineRoundChart';

export default function RetentionByCohortChart() {
    return (
        <Card title="User retention by cohort" className='h-full' style={{ height: "350px" }}>
            <LineRoundChart />
        </Card>
    );
}