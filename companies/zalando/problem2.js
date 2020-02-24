'use strict';

/* global CustomError, getLikedBrands, getTopBrandsForGender */

/* LIST OF N TOP BRAND NAMES
   FOR EACH SPECIFIC USERS

   siavash: nike, acer, sony
   mojtaba: sony, sumsong, shiamo, addias
   sheida: rayban, xerox, hp, sony

    Gender LIST
    -----------------------+
    if user has not enoght N like brand use GenerList
    if user likes & gener of user list not enough > error
    ----------------------+
    U: user
    N: number of brands (1..100)


    { id: 123132, gender: 'FEMALE' }
    { id: 123132, gender: 'FEMALE' }
    { id: 123132, gender: 'FEMALE' }
*/

function solution(U, N) {
    return new Promise((resolve, reject) => {
        let resultLikedBrands = getLikedBrands(U.id);
        let resultGenderBrands = getTopBrandsForGender(U.gender);

        if (resultLikedBrands.length + resultGenderBrands.length < N) {
            reject('Not enough data');
            return;
        }

        if (resultLikedBrands.length >= N) {
            resolve(
                resultLikedBrands.slice(0, N).map(x => {
                    return x.name;
                })
            );
            return;
        }
        resolve([
            ...resultLikedBrands,
            ...resultGenderBrands.slice(0, N - resultLikedBrands.length)
        ]);
    });
}
