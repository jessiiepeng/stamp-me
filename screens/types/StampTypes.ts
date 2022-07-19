export type Stamp = {
    id: number;
    name: string;
    stampDate: number;
    latitude: number;
    longitude: number;
    imageUrl: string;
    submittedBy?: string; // todo change to user id later
}
// todo add tags 