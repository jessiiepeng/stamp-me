export type CollectedStamp = {
    id: number;
    name: string;
    stampDate: number;
    latitude: number;
    longitude: number;
    imageUrl: string;
    submittedBy?: string; // todo change to user id later
}
// todo add tags 

export type SubmittedStamp = {
    id: number;
    name: string;
    submitDate: number;
    reviewDate?: number;
    latitude: number;
    longitude: number;
    imageUrl: string; // todo change later to database item
    submittedBy: string; // todo change to user id later
    reviewedBy?: string; // todo change to user id later
}