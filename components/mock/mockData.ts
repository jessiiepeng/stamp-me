import { Stamp } from "../../screens/types/StampTypes"

const mockStamp: Stamp = {
    id: 1,
    name: 'Toronto Island',
    stampDate: 101902111111,
    latitude: 43.6214,
    longitude: -79.3788,
    imageUrl: "https://i.etsystatic.com/5346063/r/il/8a1ecb/2006921433/il_570xN.2006921433_qqpm.jpg"
}

const mockStamp2: Stamp = {
    id: 2,
    name: 'University of Toronto',
    stampDate: 10190211111221,
    latitude: 43.6609,
    longitude: -79.3959,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/1200px-Utoronto_coa.svg.png"
}

const mockStamp3: Stamp = {
    id: 3,
    name: 'Art Gallery of Ontario',
    stampDate: 10230211111221,
    latitude: 43.6536,
    longitude: -79.3925,
    imageUrl: "http://torontoist.com/attachments/Sarah%20Prickett/AGO-Lockdown-CMYK_clip_640.jpg"
}

const mockStamp4: Stamp = {
    id: 4,
    name: 'Daldongnae KBBQ',
    stampDate: 101902111421,
    latitude: 43.7897,
    longitude: -79.4184,
    imageUrl: "https://i.pinimg.com/736x/0c/f1/0d/0cf10d33fc844fc8e8bde36ad42d0500.jpg"
}

const mockStampCollection: Stamp[] = [mockStamp, mockStamp2, mockStamp3, mockStamp4]

export default mockStampCollection







