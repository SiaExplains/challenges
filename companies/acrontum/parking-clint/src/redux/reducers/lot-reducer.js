export default (state = [], action) => {
    const lots = [...state];
    switch (action.type) {
        case 'LOT_DEFINE':
            lots.push(action.lot);
            return [...lots];
        case 'LOT_PARK_CAR':
            const index = lots.indexOf(action.lot);
            lots[index] = { ...action.lot };
            lots[index].fill = true;
            lots[index].carPlate = action.carPlate;
            return [...lots];
        case 'LOT_RELEASE':
            const indexOfLot = lots.indexOf(action.lot);
            lots[indexOfLot] = { ...action.lot };
            lots[indexOfLot].fill = false;
            lots[indexOfLot].carPlate = '';
            return [...lots];
        default:
            return state;
    }
};
