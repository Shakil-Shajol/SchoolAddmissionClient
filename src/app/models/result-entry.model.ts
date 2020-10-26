import { Candidateadd } from "./candidateadd.model";
import { Subject } from "./session.model";

export class ResultEntry {
    examId:number;
    candidates:Candidateadd[];
    subjects:Subject[];
}
