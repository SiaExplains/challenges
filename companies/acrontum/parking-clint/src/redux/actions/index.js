export const defineLot = lot => ({
    type: 'LOT_DEFINE',
    lot
});

export const parkACar = (lot, carPlate) => ({
    type: 'LOT_PARK_CAR',
    carPlate,
    lot
});

export const releaseLot = lot => ({
    type: 'LOT_RELEASE',
    lot
});

export const isFullAllParkingLots = lot => ({
    type: 'LOT_CHECK_FULL'
});
