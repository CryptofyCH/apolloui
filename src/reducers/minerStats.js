import {
  FETCH_MINER_BEGIN,
  FETCH_MINER_SUCCESS,
  FETCH_MINER_FAILURE
} from '../actions/miner';

const initialState = {
    "data": {
      "stats": [{
        "date": "2021-02-09 15:54:19",
        "statVersion": "1.2",
        "versions": {
          "miner": "v13.16.1",
          "minerDate": "2019-08-08",
          "minerDebug": "0",
          "mspVer": "0xd163"
        },
        "master": {
          "upTime": 591230,
          "diff": 4491,
          "boards": 1,
          "errorSpi": 0,
          "osc": 62,
          "hwAddr": "00:00:00:00:00:00",
          "boardsI": 32.7,
          "boardsW": 277,
          "wattPerGHs": 0.073,
          "intervals": {
            "int_0": {
              "name": "total",
              "interval": 591202,
              "bySol": 3794.7,
              "byDiff": 3799.1,
              "byPool": 3750.3,
              "byJobs": 3852.6,
              "solutions": 522341986,
              "errors": 6728977,
              "errorRate": 1.3,
              "chipSpeed": 86.24,
              "chipRestarts": 254952
            },
            "int_30": {
              "name": "30 sec",
              "interval": 10,
              "bySol": 4118.9,
              "byDiff": 7715.5,
              "byPool": 7715.5,
              "byJobs": 4198.6,
              "solutions": 9590,
              "errors": 107,
              "errorRate": 1.1,
              "chipSpeed": 93.61,
              "chipRestarts": 0
            },
            "int_300": {
              "name": "5 min",
              "interval": 103,
              "bySol": 3804.5,
              "byDiff": 4307.2,
              "byPool": 3932.7,
              "byJobs": 3883.1,
              "solutions": 91237,
              "errors": 1155,
              "errorRate": 1.3,
              "chipSpeed": 86.47,
              "chipRestarts": 44
            },
            "int_900": {
              "name": "15 min",
              "interval": 309,
              "bySol": 3786.6,
              "byDiff": 4244.8,
              "byPool": 4057.5,
              "byJobs": 3852,
              "solutions": 272427,
              "errors": 3320,
              "errorRate": 1.2,
              "chipSpeed": 86.06,
              "chipRestarts": 132
            },
            "int_3600": {
              "name": "1 hour",
              "interval": 1234,
              "bySol": 3795,
              "byDiff": 3751.5,
              "byPool": 3657.7,
              "byJobs": 3853.4,
              "solutions": 1090341,
              "errors": 13839,
              "errorRate": 1.3,
              "chipSpeed": 86.25,
              "chipRestarts": 528
            }
          }
        },
        "pool": {
          "host": "us-east.stratum.slushpool.com",
          "port": 3333,
          "userName": "jstefanop.worker1",
          "diff": 4491,
          "intervals": {
            "int_0": {
              "name": "total",
              "interval": 591202,
              "jobs": 21681,
              "cleanFlags": 1040,
              "sharesSent": 122077,
              "sharesAccepted": 121988,
              "sharesRejected": 89,
              "solutionsAccepted": 516223196,
              "minRespTime": 18446743115130960,
              "avgRespTime": 150444149418,
              "maxRespTime": 18446743706350110,
              "shareLoss": 0,
              "poolTotal": 591202,
              "inService": 591202,
              "subscribeError": 0,
              "diffChanges": 46,
              "reconnections": 0,
              "reconnectionsOnErrors": 0,
              "defaultJobShares": 0,
              "staleJobShares": 565,
              "duplicateShares": 0,
              "lowDifficultyShares": 1,
              "pwcSharesSent": 123591,
              "pwcSharesDropped": 0,
              "bigDiffShares": 0,
              "belowTargetShare": 0,
              "pwcRestart": 0,
              "statOverflow": 0
            }
          }
        },
        "fans": {
          "int_0": {
            "rpm": [
              3720
            ]
          }
        },
        "temperature": {
          "count": 2,
          "min": 0,
          "avr": 34,
          "max": 69
        },
        "slots": {
          "int_0": {
            "revision": 20,
            "spiNum": 1,
            "spiLen": 4,
            "pwrNum": 2,
            "pwrLen": 2,
            "btcNum": 11,
            "specVoltage": 12,
            "chips": 44,
            "pwrOn": 1,
            "pwrOnTarget": 1,
            "revAdc": 4007,
            "temperature": 69,
            "temperature1": 0,
            "ocp": 0,
            "heaterErr": 0,
            "heaterErrNum": 0,
            "inOHOsc": 0,
            "ohOscNum": 0,
            "ohOscTime": 0,
            "overheats": 0,
            "overheatsTime": 0,
            "lowCurrRst": 0,
            "currents": [
              16325,
              16333
            ],
            "brokenPwc": 0,
            "solutions": 9590,
            "errors": 107,
            "ghs": 4118.9,
            "errorRate": 1.1,
            "chipRestarts": 0,
            "wattPerGHs": 0.067251,
            "tmpAlert": [
              {
                "alertLo": 0,
                "alertHi": 0,
                "numWrite": 0
              },
              {
                "alertLo": 0,
                "alertHi": 0,
                "numWrite": 0
              }
            ],
            "osc": 62,
            "oscStopChip": "N/A"
          }
        },
        "slaves": [
          {
            "id": 0,
            "uid": "4A003D0008504E3943303320",
            "ver": "0x13160100",
            "rx": 1022976,
            "err": 0,
            "time": 582575,
            "ping": 854
          }
        ]
      }]
    },
    loading: false,
    "error": null
}

export default function minerStatsReducer(state = initialState, action) {
    console.log(action)
  switch(action.type) {
    case FETCH_MINER_BEGIN:
      return {
        ...state,
        loading: true
      };

    case FETCH_MINER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: null
      };

    case FETCH_MINER_FAILURE:
      return {
        ...initialState,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
}