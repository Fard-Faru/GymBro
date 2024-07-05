import { DateValue } from "@nextui-org/react";

export interface WeightType {
    metric: string;
    weight: string;
    recordedOn: DateValue | string | null;
}
