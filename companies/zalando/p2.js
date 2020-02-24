'use strict';

/* global CustomError, getLikedBrands, getTopBrandsForGender */
function solution(U, N) {
    const { id, gender } = U;
    return new Promise((resolve, reject) => {
        Promise.all([getLikedBrands(id), getTopBrandsForGender(gender)])

            .then(resultOfPromises => {
                const userResult = resultOfPromises[0];
                const genderResult = resultOfPromises[1];

                if (userResult.length >= N) {
                    resolve(userResult.map(user => user.name).slice(0, N));
                } else {
                    var byGenderFiltered = genderResult.filter(arr => {
                        return (
                            userResult.filter(nested => {
                                return nested.id == arr.id;
                            }).length === 0
                        );
                    });
                    var cuterIndex = N - userResult.length;
                    if (cuterIndex <= byGenderFiltered.length) {
                        let resolveBrands = [
                            ...userResult,
                            ...byGenderFiltered.slice(0, cuterIndex)
                        ];
                        resolve(resolveBrands.map(a => a.name));
                    } else {
                        throw 'Not enough data';
                    }
                }
            })
            .catch(err => {
                return reject(err.message);
            });
    });
}
