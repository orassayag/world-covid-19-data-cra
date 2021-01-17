import { SourceName } from '../../core/enums';
import { LocalCountryModel } from '../../core/models';

class LocalData {

    constructor() {
        this.countriesList = null;
        this.countriesKeysList = null;
    }

    initiate() {
        this.countriesList = {
            1: new LocalCountryModel({
                id: 1,
                populationCount: 7794798739,
                sourcesData: {
                    [SourceName.CAC]: [82808887, 1810936, 58153289],
                    [SourceName.CLN]: [84436810, 1836187, 59249732],
                    [SourceName.COA]: [83951583, 1827430, 47278729],
                    [SourceName.CVA]: [84449093, 1836919, 59742153],
                    [SourceName.CVS]: [4525103, 303351, 1703742],
                    [SourceName.GOO]: [84669877, 1840712, 59440003],
                    [SourceName.WIK]: [83963941, 1827544, 47289349],
                    [SourceName.WOD]: [78720217, 1741808, 54368698]
                }
            }),
            2: new LocalCountryModel({
                id: 2,
                populationCount: 30072,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            3: new LocalCountryModel({
                id: 3,
                populationCount: 245424,
                sourcesData: {
                    [SourceName.CAC]: null,
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: [7504, 100, 5545],
                    [SourceName.WOD]: null
                }
            }),
            4: new LocalCountryModel({
                id: 4,
                populationCount: 124390,
                sources: null
            }),
            5: new LocalCountryModel({
                id: 5,
                populationCount: 5316320,
                sources: null
            }),
            6: new LocalCountryModel({
                id: 6,
                populationCount: 349000,
                sources: null
            }),
            7: new LocalCountryModel({
                id: 7,
                populationCount: 453376,
                sources: null
            }),
            8: new LocalCountryModel({
                id: 8,
                populationCount: 39344149,
                sourcesData: {
                    [SourceName.CAC]: [52330, 2189, 41801],
                    [SourceName.CLN]: [52706, 2221, 42291],
                    [SourceName.COA]: [51526, 2191, 41727],
                    [SourceName.CVA]: [52706, 2221, 42291],
                    [SourceName.CVS]: [5639, 136, 691],
                    [SourceName.GOO]: [52706, 2221, 42291],
                    [SourceName.WIK]: [52586, 2211, 42175],
                    [SourceName.WOD]: null
                }
            }),
            9: new LocalCountryModel({
                id: 9,
                populationCount: 15700,
                sources: null
            }),
            10: new LocalCountryModel({
                id: 10,
                populationCount: 2875795,
                sourcesData: {
                    [SourceName.CAC]: [57727, 1174, 33185],
                    [SourceName.CLN]: [58316, 1181, 33634],
                    [SourceName.COA]: [58316, 1181, 33634],
                    [SourceName.CVA]: [58316, 1181, 33634],
                    [SourceName.CVS]: [898, 31, 694],
                    [SourceName.GOO]: [58316, 1181, 33634],
                    [SourceName.WIK]: [58316, 1181, 33634],
                    [SourceName.WOD]: [58316, 1181, 33634]
                }
            }),
            11: new LocalCountryModel({
                id: 11,
                populationCount: 44206445,
                sourcesData: {
                    [SourceName.CAC]: [99311, 2751, 66855],
                    [SourceName.CLN]: [99897, 2762, 67395],
                    [SourceName.COA]: [99897, 2762, 67395],
                    [SourceName.CVA]: [99897, 2762, 67395],
                    [SourceName.CVS]: [6442, 529, 3158],
                    [SourceName.GOO]: [99897, 2762, 67395],
                    [SourceName.WIK]: [99897, 2762, 67395],
                    [SourceName.WOD]: null
                }
            }),
            12: new LocalCountryModel({
                id: 12,
                populationCount: 218063,
                sources: null
            }),
            13: new LocalCountryModel({
                id: 13,
                populationCount: 55191,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            14: new LocalCountryModel({
                id: 14,
                populationCount: 77265,
                sourcesData: {
                    [SourceName.CAC]: [7983, 84, 7384],
                    [SourceName.CLN]: [8117, 84, 7463],
                    [SourceName.COA]: [8117, 84, 7463],
                    [SourceName.CVA]: [8117, 84, 7463],
                    [SourceName.CVS]: [761, 49, 596],
                    [SourceName.GOO]: [8117, 84, 7463],
                    [SourceName.WIK]: [8117, 84, 7463],
                    [SourceName.WOD]: null
                }
            }),
            15: new LocalCountryModel({
                id: 15,
                populationCount: 33344645,
                sourcesData: {
                    [SourceName.CAC]: [17433, 405, 10859],
                    [SourceName.CLN]: [17568, 405, 11146],
                    [SourceName.COA]: [17568, 405, 11146],
                    [SourceName.CVA]: [17568, 405, 11146],
                    [SourceName.CVS]: [48, 2, 14],
                    [SourceName.GOO]: [17568, 405, 11146],
                    [SourceName.WIK]: [17553, 405, 11044],
                    [SourceName.WOD]: null
                }
            }),
            16: new LocalCountryModel({
                id: 16,
                populationCount: 15003,
                sourcesData: {
                    [SourceName.CAC]: [13, 0, 12],
                    [SourceName.CLN]: [13, 0, 12],
                    [SourceName.COA]: null,
                    [SourceName.CVA]: [13, 0, 12],
                    [SourceName.CVS]: [13, 0, 12],
                    [SourceName.GOO]: [13, 0, 12],
                    [SourceName.WIK]: [13, 0, 12],
                    [SourceName.WOD]: null
                }
            }),
            17: new LocalCountryModel({
                id: 17,
                populationCount: 2500,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            18: new LocalCountryModel({
                id: 18,
                populationCount: 98263,
                sourcesData: {
                    [SourceName.CAC]: [158, 5, 148],
                    [SourceName.CLN]: [159, 5, 148],
                    [SourceName.COA]: [159, 5, 148],
                    [SourceName.CVA]: [159, 5, 148],
                    [SourceName.CVS]: [25, 3, 19],
                    [SourceName.GOO]: [159, 5, 148],
                    [SourceName.WIK]: [158, 5, 148],
                    [SourceName.WOD]: null
                }
            }),
            19: new LocalCountryModel({
                id: 19,
                populationCount: 126933,
                sources: null
            }),
            20: new LocalCountryModel({
                id: 20,
                populationCount: 45384988,
                sourcesData: {
                    [SourceName.CAC]: [1613928, 43163, 1426676],
                    [SourceName.CLN]: [1629594, 43319, 1426676],
                    [SourceName.COA]: [1629594, 43319, 1426676],
                    [SourceName.CVA]: [1629594, 43319, 1426676],
                    [SourceName.CVS]: [7134, 353, 0],
                    [SourceName.GOO]: [1629594, 43319, 1426676],
                    [SourceName.WIK]: [1629577, 43319, 1426661],
                    [SourceName.WOD]: [1629594, 43319, 1426676]
                }
            }),
            21: new LocalCountryModel({
                id: 21,
                populationCount: 2965913,
                sourcesData: {
                    [SourceName.CAC]: [158878, 2807, 141844],
                    [SourceName.CLN]: [159798, 2836, 143640],
                    [SourceName.COA]: [159738, 2828, 143355],
                    [SourceName.CVA]: [159798, 2836, 143640],
                    [SourceName.CVS]: [3860, 49, 1572],
                    [SourceName.GOO]: [159798, 2836, 143640],
                    [SourceName.WIK]: [159738, 2828, 143355],
                    [SourceName.WOD]: [159798, 2836, 143640]
                }
            }),
            22: new LocalCountryModel({
                id: 22,
                populationCount: 148800,
                sourcesData: {
                    [SourceName.CAC]: null,
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: [1130, 30, 337],
                    [SourceName.WOD]: null
                }
            }),
            23: new LocalCountryModel({
                id: 23,
                populationCount: 106933,
                sourcesData: {
                    [SourceName.CAC]: [5442, 49, 5132],
                    [SourceName.CLN]: [5509, 49, 5179],
                    [SourceName.COA]: null,
                    [SourceName.CVA]: [5509, 49, 5179],
                    [SourceName.CVS]: [101, 3, 93],
                    [SourceName.GOO]: [5509, 49, 5179],
                    [SourceName.WIK]: [5509, 49, 5179],
                    [SourceName.WOD]: null
                }
            }),
            24: new LocalCountryModel({
                id: 24,
                populationCount: 806,
                sources: null
            }),
            25: new LocalCountryModel({
                id: 25,
                populationCount: 4780380,
                sources: null
            }),
            26: new LocalCountryModel({
                id: 26,
                populationCount: 25636204,
                sourcesData: {
                    [SourceName.CAC]: [28402, 909, 25759],
                    [SourceName.CLN]: [28402, 909, 25770],
                    [SourceName.COA]: [28460, 909, 25770],
                    [SourceName.CVA]: [28402, 909, 25770],
                    [SourceName.CVS]: [6989, 98, 6301],
                    [SourceName.GOO]: [28402, 909, 25770],
                    [SourceName.WIK]: [28381, 909, 25486],
                    [SourceName.WOD]: null
                }
            }),
            27: new LocalCountryModel({
                id: 27,
                populationCount: 1000,
                sources: null
            }),
            28: new LocalCountryModel({
                id: 28,
                populationCount: 9028089,
                sourcesData: {
                    [SourceName.CAC]: [357902, 6149, 330990],
                    [SourceName.CLN]: [362911, 6261, 334901],
                    [SourceName.COA]: [362911, 6261, 334901],
                    [SourceName.CVA]: [362911, 6261, 334901],
                    [SourceName.CVS]: [16058, 626, 14405],
                    [SourceName.GOO]: [362911, 6275, 336922],
                    [SourceName.WIK]: [364302, 6275, 336922],
                    [SourceName.WOD]: [362911, 6261, 334901]
                }
            }),
            29: new LocalCountryModel({
                id: 29,
                populationCount: 0,
                sources: null
            }),
            30: new LocalCountryModel({
                id: 30,
                populationCount: 10180557,
                sourcesData: {
                    [SourceName.CAC]: [217636, 2609, 180295],
                    [SourceName.CLN]: [219041, 2670, 188280],
                    [SourceName.COA]: [219041, 2670, 188280],
                    [SourceName.CVA]: [219041, 2670, 188280],
                    [SourceName.CVS]: [2879, 35, 1833],
                    [SourceName.GOO]: [219041, 2670, 188280],
                    [SourceName.WIK]: [219041, 2670, 188280],
                    [SourceName.WOD]: [219041, 2670, 188280]
                }
            }),
            31: new LocalCountryModel({
                id: 31,
                populationCount: 0,
                sources: null
            }),
            32: new LocalCountryModel({
                id: 32,
                populationCount: 7887,
                sourcesData: {
                    [SourceName.CAC]: [7857, 170, 6221],
                    [SourceName.CLN]: [7887, 171, 6239],
                    [SourceName.COA]: [7887, 171, 6239],
                    [SourceName.CVA]: [7887, 171, 6239],
                    [SourceName.CVS]: [96, 11, 0],
                    [SourceName.GOO]: [7887, 171, 6239],
                    [SourceName.WIK]: [7788, 169, 6166],
                    [SourceName.WOD]: [7887, 171, 6239]
                }
            }),
            33: new LocalCountryModel({
                id: 33,
                populationCount: 1725602,
                sourcesData: {
                    [SourceName.CAC]: [92425, 352, 90026],
                    [SourceName.CLN]: [92913, 352, 90369],
                    [SourceName.COA]: [92913, 352, 90369],
                    [SourceName.CVA]: [92913, 352, 90369],
                    [SourceName.CVS]: [6198, 10, 2353],
                    [SourceName.GOO]: [92913, 352, 90369],
                    [SourceName.WIK]: [92913, 352, 90369],
                    [SourceName.WOD]: [92913, 352, 90369]
                }
            }),
            34: new LocalCountryModel({
                id: 34,
                populationCount: 0,
                sources: null
            }),
            35: new LocalCountryModel({
                id: 35,
                populationCount: 0,
                sources: null
            }),
            378: new LocalCountryModel({
                id: 378,
                populationCount: 0,
                sources: null
            }),
            36: new LocalCountryModel({
                id: 36,
                populationCount: 165433556,
                sourcesData: {
                    [SourceName.CAC]: [512496, 7531, 456070],
                    [SourceName.CLN]: [515184, 7599, 459620],
                    [SourceName.COA]: [514500, 7576, 458656],
                    [SourceName.CVA]: [515184, 7599, 459620],
                    [SourceName.CVS]: [3361, 283, 3361],
                    [SourceName.GOO]: [515184, 7599, 459620],
                    [SourceName.WIK]: [514500, 7576, 458656],
                    [SourceName.WOD]: null
                }
            }),
            37: new LocalCountryModel({
                id: 37,
                populationCount: 4273149,
                sources: null
            }),
            38: new LocalCountryModel({
                id: 38,
                populationCount: 287542,
                sourcesData: {
                    [SourceName.CAC]: [372, 7, 312],
                    [SourceName.CLN]: [395, 7, 319],
                    [SourceName.COA]: [395, 7, 319],
                    [SourceName.CVA]: [395, 7, 319],
                    [SourceName.CVS]: [85, 7, 65],
                    [SourceName.GOO]: [395, 7, 319],
                    [SourceName.WIK]: [395, 7, 319],
                    [SourceName.WOD]: null
                }
            }),
            39: new LocalCountryModel({
                id: 39,
                populationCount: 4063293,
                sources: null
            }),
            40: new LocalCountryModel({
                id: 40,
                populationCount: 2189534,
                sources: null
            }),
            41: new LocalCountryModel({
                id: 41,
                populationCount: 9447654,
                sourcesData: {
                    [SourceName.CAC]: [192361, 1414, 171901],
                    [SourceName.CLN]: [198125, 1442, 181109],
                    [SourceName.COA]: [196223, 1433, 178102],
                    [SourceName.CVA]: [198125, 1442, 181109],
                    [SourceName.CVS]: [26772, 151, 8168],
                    [SourceName.GOO]: [198125, 1442, 181109],
                    [SourceName.WIK]: [198125, 1442, 181109],
                    [SourceName.WOD]: [198125, 1442, 181109]
                }
            }),
            42: new LocalCountryModel({
                id: 42,
                populationCount: 11612315,
                sourcesData: {
                    [SourceName.CAC]: [641411, 19361, 44136],
                    [SourceName.CLN]: [648289, 19581, 44787],
                    [SourceName.COA]: [648289, 19581, 0],
                    [SourceName.CVA]: [648289, 19581, 44787],
                    [SourceName.CVS]: [54288, 8903, 14111],
                    [SourceName.GOO]: [648289, 19581, 44787],
                    [SourceName.WIK]: [648289, 19581, null],
                    [SourceName.WOD]: [648289, 19581, 44787]
                }
            }),
            43: new LocalCountryModel({
                id: 43,
                populationCount: 400965,
                sourcesData: {
                    [SourceName.CAC]: [10724, 242, 9689],
                    [SourceName.CLN]: [10776, 248, 9795],
                    [SourceName.COA]: [10776, 248, 9795],
                    [SourceName.CVA]: [10776, 248, 9795],
                    [SourceName.CVS]: [18, 2, 16],
                    [SourceName.GOO]: [10776, 248, 9795],
                    [SourceName.WIK]: [10370, 226, 8933],
                    [SourceName.WOD]: null
                }
            }),
            44: new LocalCountryModel({
                id: 44,
                populationCount: 3251,
                sourcesData: {
                    [SourceName.CAC]: [3251, 44, 3061],
                    [SourceName.CLN]: [3251, 44, 3061],
                    [SourceName.COA]: [3251, 44, 3061],
                    [SourceName.CVA]: [3251, 44, 3061],
                    [SourceName.CVS]: [339, 2, 83],
                    [SourceName.GOO]: [3251, 44, 3088],
                    [SourceName.WIK]: [3167, 44, 3061],
                    [SourceName.WOD]: null
                }
            }),
            45: new LocalCountryModel({
                id: 45,
                populationCount: 62278,
                sourcesData: {
                    [SourceName.CAC]: [595, 10, 421],
                    [SourceName.CLN]: [6040, 10, 445],
                    [SourceName.COA]: null,
                    [SourceName.CVA]: [604, 10, 445],
                    [SourceName.CVS]: [122, 9, 66],
                    [SourceName.GOO]: [604, 10, 445],
                    [SourceName.WIK]: [610, 10, 445],
                    [SourceName.WOD]: null
                }
            }),
            46: new LocalCountryModel({
                id: 46,
                populationCount: 775446,
                sourcesData: {
                    [SourceName.CAC]: [655, 0, 447],
                    [SourceName.CLN]: [689, 0, 449],
                    [SourceName.COA]: [689, 0, 449],
                    [SourceName.CVA]: [689, 0, 449],
                    [SourceName.CVS]: [20, 0, 5],
                    [SourceName.GOO]: [689, 0, 449],
                    [SourceName.WIK]: [689, 0, 449],
                    [SourceName.WOD]: null
                }
            }),
            47: new LocalCountryModel({
                id: 47,
                populationCount: 11746103,
                sourcesData: {
                    [SourceName.CAC]: [158372, 9149, 131579],
                    [SourceName.CLN]: [160985, 9175, 132510],
                    [SourceName.COA]: [160985, 9175, 132510],
                    [SourceName.CVA]: [160985, 9175, 132510],
                    [SourceName.CVS]: [3148, 142, 339],
                    [SourceName.GOO]: [160985, 9175, 132510],
                    [SourceName.WIK]: [160985, 9175, 132510],
                    [SourceName.WOD]: [160985, 9175, 132510]
                }
            }),
            48: new LocalCountryModel({
                id: 48,
                populationCount: 20104,
                sourcesData: {
                    [SourceName.CAC]: null,
                    [SourceName.CLN]: [196, 3, 180],
                    [SourceName.COA]: null,
                    [SourceName.CVA]: [196, 3, 180],
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: [196, 3, 180],
                    [SourceName.WIK]: [142, 3, 138],
                    [SourceName.WOD]: null
                }
            }),
            49: new LocalCountryModel({
                id: 49,
                populationCount: 3270140,
                sourcesData: {
                    [SourceName.CAC]: [110985, 4050, 77225],
                    [SourceName.CLN]: [112143, 4086, 77682],
                    [SourceName.COA]: [112143, 4086, 77682],
                    [SourceName.CVA]: [112143, 4086, 77682],
                    [SourceName.CVS]: [2218, 122, 1272],
                    [SourceName.GOO]: [112143, 4086, 77682],
                    [SourceName.WIK]: [112143, 4086, 77682],
                    [SourceName.WOD]: [112143, 4086, 77682]
                }
            }),
            50: new LocalCountryModel({
                id: 50,
                populationCount: 2372150,
                sourcesData: {
                    [SourceName.CAC]: [14700, 40, 12006],
                    [SourceName.CLN]: [14805, 42, 12136],
                    [SourceName.COA]: [14805, 42, 12136],
                    [SourceName.CVA]: [14805, 42, 12136],
                    [SourceName.CVS]: [24, 1, 17],
                    [SourceName.GOO]: [14805, 42, 12136],
                    [SourceName.WIK]: [12340, 40, 11627],
                    [SourceName.WOD]: null
                }
            }),
            51: new LocalCountryModel({
                id: 51,
                populationCount: 249358,
                sources: null
            }),
            52: new LocalCountryModel({
                id: 52,
                populationCount: 0,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            53: new LocalCountryModel({
                id: 53,
                populationCount: 213239017,
                sourcesData: {
                    [SourceName.CAC]: [7619970, 193940, 6707781],
                    [SourceName.CLN]: [7700578, 195441, 6756284],
                    [SourceName.COA]: [7700578, 195411, 6855372],
                    [SourceName.CVA]: [7700578, 195441, 6756284],
                    [SourceName.CVS]: [203165, 13999, 79479],
                    [SourceName.GOO]: [7700578, 195441, 6756284],
                    [SourceName.WIK]: [7700578, 195441, 6756284],
                    [SourceName.WOD]: [7700578, 195441, 6756284]
                }
            }),
            54: new LocalCountryModel({
                id: 54,
                populationCount: 250,
                sources: null
            }),
            55: new LocalCountryModel({
                id: 55,
                populationCount: 3000,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            56: new LocalCountryModel({
                id: 56,
                populationCount: 439314,
                sourcesData: {
                    [SourceName.CAC]: [157, 3, 149],
                    [SourceName.CLN]: [157, 3, 149],
                    [SourceName.COA]: [157, 3, 149],
                    [SourceName.CVA]: [157, 3, 149],
                    [SourceName.CVS]: [141, 1, 134],
                    [SourceName.GOO]: [157, 3, 149],
                    [SourceName.WIK]: [150, 3, 145],
                    [SourceName.WOD]: null
                }
            }),
            57: new LocalCountryModel({
                id: 57,
                populationCount: 83516,
                sources: null
            }),
            58: new LocalCountryModel({
                id: 58,
                populationCount: 6925085,
                sourcesData: {
                    [SourceName.CAC]: [201220, 7515, 118335],
                    [SourceName.CLN]: [202540, 7604, 120343],
                    [SourceName.COA]: [202540, 7604, 120343],
                    [SourceName.CVA]: [202540, 7604, 120343],
                    [SourceName.CVS]: [2100, 99, 531],
                    [SourceName.GOO]: [202540, 7604, 120343],
                    [SourceName.WIK]: [202540, 7604, 120343],
                    [SourceName.WOD]: [202540, 7604, 120343]
                }
            }),
            59: new LocalCountryModel({
                id: 59,
                populationCount: 21169407,
                sourcesData: {
                    [SourceName.CAC]: [6631, 84, 4978],
                    [SourceName.CLN]: [6828, 85, 5152],
                    [SourceName.COA]: [6828, 85, 5152],
                    [SourceName.CVA]: [6828, 85, 5152],
                    [SourceName.CVS]: [773, 51, 592],
                    [SourceName.GOO]: [6828, 85, 5152],
                    [SourceName.WIK]: [5649, 77, 4018],
                    [SourceName.WOD]: null
                }
            }),
            60: new LocalCountryModel({
                id: 60,
                populationCount: 12053968,
                sourcesData: {
                    [SourceName.CAC]: [809, 2, 687],
                    [SourceName.CLN]: [822, 2, 687],
                    [SourceName.COA]: [822, 2, 687],
                    [SourceName.CVA]: [822, 2, 687],
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: [822, 2, 707],
                    [SourceName.WIK]: [760, 2, 687],
                    [SourceName.WOD]: null
                }
            }),
            61: new LocalCountryModel({
                id: 61,
                populationCount: 984511,
                sources: null
            }),
            62: new LocalCountryModel({
                id: 62,
                populationCount: 16824417,
                sourcesData: {
                    [SourceName.CAC]: [364, 0, 361],
                    [SourceName.CLN]: [379, 0, 362],
                    [SourceName.COA]: [379, 0, 362],
                    [SourceName.CVA]: [379, 0, 362],
                    [SourceName.CVS]: [122, 0, 121],
                    [SourceName.GOO]: [379, 0, 362],
                    [SourceName.WIK]: [378, 0, 362],
                    [SourceName.WOD]: null
                }
            }),
            63: new LocalCountryModel({
                id: 63,
                populationCount: 26851208,
                sourcesData: {
                    [SourceName.CAC]: [26277, 448, 24892],
                    [SourceName.CLN]: [26848, 448, 24892],
                    [SourceName.COA]: [26848, 448, 24892],
                    [SourceName.CVA]: [26848, 448, 24892],
                    [SourceName.CVS]: [2954, 139, 1553],
                    [SourceName.GOO]: [26848, 448, 25468],
                    [SourceName.WIK]: [25849, 448, 24892],
                    [SourceName.WOD]: null
                }
            }),
            64: new LocalCountryModel({
                id: 64,
                populationCount: 37894326,
                sourcesData: {
                    [SourceName.CAC]: [572982, 15472, 484583],
                    [SourceName.CLN]: [582697, 15606, 489819],
                    [SourceName.COA]: [585374, 15643, 494437],
                    [SourceName.CVA]: [582697, 15606, 489819],
                    [SourceName.CVS]: [73401, 5472, 36091],
                    [SourceName.GOO]: [582697, 15606, 489819],
                    [SourceName.WIK]: [582697, 15606, 489819],
                    [SourceName.WOD]: [582697, 15606, 489819]
                }
            }),
            65: new LocalCountryModel({
                id: 65,
                populationCount: 2153389,
                sources: null
            }),
            66: new LocalCountryModel({
                id: 66,
                populationCount: 558657,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: [11872, 113, 11569],
                    [SourceName.COA]: [11872, 113, 11569],
                    [SourceName.CVA]: [11872, 113, 11569],
                    [SourceName.CVS]: [315, 2, 67],
                    [SourceName.GOO]: [11872, 113, 11569],
                    [SourceName.WIK]: [11872, 113, 11569],
                    [SourceName.WOD]: [11872, 113, 11569]
                }
            }),
            67: new LocalCountryModel({
                id: 67,
                populationCount: 7522596,
                sources: null
            }),
            68: new LocalCountryModel({
                id: 68,
                populationCount: 65722,
                sourcesData: {
                    [SourceName.CAC]: [330, 2, 294],
                    [SourceName.CLN]: [338, 2, 294],
                    [SourceName.COA]: null,
                    [SourceName.CVA]: [338, 2, 294],
                    [SourceName.CVS]: [93, 1, 54],
                    [SourceName.GOO]: [338, 2, 294],
                    [SourceName.WIK]: [338, 2, 294],
                    [SourceName.WOD]: null
                }
            }),
            69: new LocalCountryModel({
                id: 69,
                populationCount: 4866809,
                sourcesData: {
                    [SourceName.CAC]: [4963, 63, 1924],
                    [SourceName.CLN]: [4963, 63, 1924],
                    [SourceName.COA]: [4963, 63, 1924],
                    [SourceName.CVA]: [4963, 63, 1924],
                    [SourceName.CVS]: [143, 0, 10],
                    [SourceName.GOO]: [4963, 63, 4859],
                    [SourceName.WIK]: [4948, 63, 1924],
                    [SourceName.WOD]: null
                }
            }),
            70: new LocalCountryModel({
                id: 70,
                populationCount: 171528,
                sources: null
            }),
            71: new LocalCountryModel({
                id: 71,
                populationCount: 16645445,
                sourcesData: {
                    [SourceName.CAC]: [2077, 104, 1703],
                    [SourceName.CLN]: [2141, 104, 1704],
                    [SourceName.COA]: [2141, 104, 1704],
                    [SourceName.CVA]: [2141, 104, 1704],
                    [SourceName.CVS]: [399, 46, 83],
                    [SourceName.GOO]: [2141, 104, 1704],
                    [SourceName.WIK]: [2113, 104, 1704],
                    [SourceName.WOD]: null
                }
            }),
            72: new LocalCountryModel({
                id: 72,
                populationCount: 1436981,
                sources: null
            }),
            73: new LocalCountryModel({
                id: 73,
                populationCount: 19183777,
                sourcesData: {
                    [SourceName.CAC]: [605950, 16499, 575595],
                    [SourceName.CLN]: [612564, 16660, 579203],
                    [SourceName.COA]: [612564, 16660, 579203],
                    [SourceName.CVA]: [612564, 16660, 579203],
                    [SourceName.CVS]: [37040, 368, 15655],
                    [SourceName.GOO]: [612564, 16660, 579203],
                    [SourceName.WIK]: [612564, 16660, 579203],
                    [SourceName.WOD]: [612564, 16660, 579203]
                }
            }),
            74: new LocalCountryModel({
                id: 74,
                populationCount: 478801,
                sources: null
            }),
            75: new LocalCountryModel({
                id: 75,
                populationCount: 1441783552,
                sourcesData: {
                    [SourceName.CAC]: [87052, 4634, 82050],
                    [SourceName.CLN]: [87093, 4634, 82076],
                    [SourceName.COA]: [96023, 4782, 90031],
                    [SourceName.CVA]: [87093, 4634, 82076],
                    [SourceName.CVS]: [82933, 4633, 78209],
                    [SourceName.GOO]: [87093, 4634, 82077],
                    [SourceName.WIK]: [87093, 4634, 82076],
                    [SourceName.WOD]: null
                }
            }),
            76: new LocalCountryModel({
                id: 76,
                populationCount: 1955,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            77: new LocalCountryModel({
                id: 77,
                populationCount: 1231117,
                sources: null
            }),
            78: new LocalCountryModel({
                id: 78,
                populationCount: 0,
                sources: null
            }),
            79: new LocalCountryModel({
                id: 79,
                populationCount: 555,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            80: new LocalCountryModel({
                id: 80,
                populationCount: 51108312,
                sourcesData: {
                    [SourceName.CAC]: [1626461, 42909, 1497180],
                    [SourceName.CLN]: [1654880, 43495, 1520548],
                    [SourceName.COA]: [1654880, 43495, 1520548],
                    [SourceName.CVA]: [1654880, 43495, 1520548],
                    [SourceName.CVS]: [13610, 525, 3358],
                    [SourceName.GOO]: [1654880, 43495, 1520548],
                    [SourceName.WIK]: [1654880, 43495, 1520548],
                    [SourceName.WOD]: [1654880, 43495, 1520548]
                }
            }),
            81: new LocalCountryModel({
                id: 81,
                populationCount: 878111,
                sourcesData: {
                    [SourceName.CAC]: [765, 9, 700],
                    [SourceName.CLN]: [823, 10, 705],
                    [SourceName.COA]: [823, 10, 705],
                    [SourceName.CVA]: [823, 10, 705],
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: [823, 10, 705],
                    [SourceName.WIK]: [823, 10, 705],
                    [SourceName.WOD]: null
                }
            }),
            82: new LocalCountryModel({
                id: 82,
                populationCount: 5580658,
                sourcesData: {
                    [SourceName.CAC]: [6908, 107, 5831],
                    [SourceName.CLN]: [7107, 108, 5846],
                    [SourceName.COA]: [7107, 108, 5846],
                    [SourceName.CVA]: [7107, 108, 5846],
                    [SourceName.CVS]: [391, 15, 87],
                    [SourceName.GOO]: [7107, 108, 5846],
                    [SourceName.WIK]: [6571, 100, 4988],
                    [SourceName.WOD]: null
                }
            }),
            83: new LocalCountryModel({
                id: 83,
                populationCount: 90824161,
                sourcesData: {
                    [SourceName.CAC]: [17376, 584, 14658],
                    [SourceName.CLN]: [17849, 591, 14701],
                    [SourceName.COA]: [17849, 591, 14701],
                    [SourceName.CVA]: [17849, 591, 14701],
                    [SourceName.CVS]: [1242, 50, 157],
                    [SourceName.GOO]: [17849, 591, 14701],
                    [SourceName.WIK]: [17848, 591, 14701],
                    [SourceName.WOD]: null
                }
            }),
            84: new LocalCountryModel({
                id: 84,
                populationCount: 17564,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            85: new LocalCountryModel({
                id: 85,
                populationCount: 4,
                sources: null
            }),
            86: new LocalCountryModel({
                id: 86,
                populationCount: 330455,
                sources: null
            }),
            87: new LocalCountryModel({
                id: 87,
                populationCount: 5115309,
                sourcesData: {
                    [SourceName.CAC]: [168114, 2171, 131507],
                    [SourceName.CLN]: [169321, 2185, 131923],
                    [SourceName.COA]: [169321, 2185, 131923],
                    [SourceName.CVA]: [169321, 2185, 131923],
                    [SourceName.CVS]: [830, 8, 535],
                    [SourceName.GOO]: [169321, 2185, 131923],
                    [SourceName.WIK]: [169321, 2185, 131923],
                    [SourceName.WOD]: null
                }
            }),
            88: new LocalCountryModel({
                id: 88,
                populationCount: 2033700,
                sources: null
            }),
            89: new LocalCountryModel({
                id: 89,
                populationCount: 4094255,
                sourcesData: {
                    [SourceName.CAC]: [208446, 3860, 196285],
                    [SourceName.CLN]: [212262, 4016, 201300],
                    [SourceName.COA]: [212007, 3961, 199820],
                    [SourceName.CVA]: [212262, 4016, 201300],
                    [SourceName.CVS]: [2221, 94, 1850],
                    [SourceName.GOO]: [212262, 4016, 201300],
                    [SourceName.WIK]: [212262, 4016, 201300],
                    [SourceName.WOD]: [212262, 4016, 201300]
                }
            }),
            90: new LocalCountryModel({
                id: 90,
                populationCount: 11324113,
                sourcesData: {
                    [SourceName.CAC]: [11687, 145, 10003],
                    [SourceName.CLN]: [12056, 146, 10345],
                    [SourceName.COA]: [12056, 146, 10345],
                    [SourceName.CVA]: [12056, 146, 10345],
                    [SourceName.CVS]: [1830, 79, 1383],
                    [SourceName.GOO]: [12056, 146, 10345],
                    [SourceName.WIK]: [11863, 146, 10125],
                    [SourceName.WOD]: null
                }
            }),
            91: new LocalCountryModel({
                id: 91,
                populationCount: 164427,
                sourcesData: {
                    [SourceName.CAC]: [4230, 14, 2759],
                    [SourceName.CLN]: [4289, 16, 2950],
                    [SourceName.COA]: null,
                    [SourceName.CVA]: [4289, 16, 2950],
                    [SourceName.CVS]: [16, 1, 14],
                    [SourceName.GOO]: [4289, 16, 2950],
                    [SourceName.WIK]: [4260, 14, 2925],
                    [SourceName.WOD]: null
                }
            }),
            92: new LocalCountryModel({
                id: 92,
                populationCount: 1211197,
                sourcesData: {
                    [SourceName.CAC]: [22019, 119, 2057],
                    [SourceName.CLN]: [22818, 127, 2057],
                    [SourceName.COA]: [22818, 127, 2057],
                    [SourceName.CVA]: [22818, 127, 2057],
                    [SourceName.CVS]: [907, 17, 481],
                    [SourceName.GOO]: [22818, 127, 2057],
                    [SourceName.WIK]: [22019, 119, 2057],
                    [SourceName.WOD]: [22818, 127, 2057]
                }
            }),
            93: new LocalCountryModel({
                id: 93,
                populationCount: 10716489,
                sourcesData: {
                    [SourceName.CAC]: [701622, 11429, 584483],
                    [SourceName.CLN]: [735469, 11827, 608128],
                    [SourceName.COA]: [732022, 11711, 600073],
                    [SourceName.CVA]: [735469, 11827, 608128],
                    [SourceName.CVS]: [8351, 293, 5241],
                    [SourceName.GOO]: [735469, 11827, 608128],
                    [SourceName.WIK]: [735469, 11827, 608128],
                    [SourceName.WOD]: [735469, 11827, 608128]
                }
            }),
            94: new LocalCountryModel({
                id: 94,
                populationCount: 26679447,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: [22563, 138, 21981],
                    [SourceName.COA]: [22563, 138, 21981],
                    [SourceName.CVA]: [22563, 138, 21981],
                    [SourceName.CVS]: [1971, 24, 930],
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: [22490, 137, 21934],
                    [SourceName.WOD]: null
                }
            }),
            95: new LocalCountryModel({
                id: 95,
                populationCount: 3063885,
                sources: null
            }),
            96: new LocalCountryModel({
                id: 96,
                populationCount: 5801880,
                sourcesData: {
                    [SourceName.CAC]: [161230, 1256, 122954],
                    [SourceName.CLN]: [165930, 1322, 130818],
                    [SourceName.COA]: [166567, 1322, 131390],
                    [SourceName.CVA]: [165930, 1322, 130818],
                    [SourceName.CVS]: [10713, 537, 8805],
                    [SourceName.GOO]: [165930, 1322, 130818],
                    [SourceName.WIK]: [165930, 1322, 130818],
                    [SourceName.WOD]: [165930, 1322, 130818]
                }
            }),
            97: new LocalCountryModel({
                id: 97,
                populationCount: 4239,
                sources: null
            }),
            98: new LocalCountryModel({
                id: 98,
                populationCount: 994507,
                sourcesData: {
                    [SourceName.CAC]: [5824, 61, 5723],
                    [SourceName.CLN]: [5840, 61, 5735],
                    [SourceName.COA]: [5840, 61, 5735],
                    [SourceName.CVA]: [5840, 61, 5735],
                    [SourceName.CVS]: [1284, 3, 905],
                    [SourceName.GOO]: [5840, 61, 5735],
                    [SourceName.WIK]: [5789, 61, 5681],
                    [SourceName.WOD]: null
                }
            }),
            99: new LocalCountryModel({
                id: 99,
                populationCount: 71986,
                sourcesData: {
                    [SourceName.CAC]: [88, 0, 83],
                    [SourceName.CLN]: [88, 0, 83],
                    [SourceName.COA]: [88, 0, 83],
                    [SourceName.CVA]: [88, 0, 83],
                    [SourceName.CVS]: [16, 0, 15],
                    [SourceName.GOO]: [96, 0, 83],
                    [SourceName.WIK]: [96, 0, 87],
                    [SourceName.WOD]: null
                }
            }),
            100: new LocalCountryModel({
                id: 100,
                populationCount: 10897132,
                sourcesData: {
                    [SourceName.CAC]: [169579, 2409, 130264],
                    [SourceName.CLN]: [172218, 2416, 131543],
                    [SourceName.COA]: [172218, 2416, 131543],
                    [SourceName.CVA]: [172218, 2416, 131543],
                    [SourceName.CVS]: [11320, 422, 3351],
                    [SourceName.GOO]: [172218, 2416, 131543],
                    [SourceName.WIK]: [172218, 2416, 131543],
                    [SourceName.WOD]: [172218, 2416, 131543]
                }
            }),
            101: new LocalCountryModel({
                id: 101,
                populationCount: 2302444,
                sourcesData: {
                    [SourceName.CAC]: null,
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: [13703, 1241, 8018],
                    [SourceName.WOD]: null
                }
            }),
            102: new LocalCountryModel({
                id: 102,
                populationCount: 7750,
                sources: null
            }),
            103: new LocalCountryModel({
                id: 103,
                populationCount: 17761521,
                sourcesData: {
                    [SourceName.CAC]: [211512, 14023, 184507],
                    [SourceName.CLN]: [213378, 14051, 184507],
                    [SourceName.COA]: [213378, 14051, 184507],
                    [SourceName.CVA]: [213378, 14051, 184507],
                    [SourceName.CVS]: [30502, 2338, 3433],
                    [SourceName.GOO]: [213378, 14051, 184507],
                    [SourceName.WIK]: [213378, 14051, 184507],
                    [SourceName.WOD]: [213378, 14051, 184507]
                }
            }),
            104: new LocalCountryModel({
                id: 104,
                populationCount: 103220070,
                sourcesData: {
                    [SourceName.CAC]: [136644, 7576, 111451],
                    [SourceName.CLN]: [139471, 7687, 112826],
                    [SourceName.COA]: [139471, 7687, 112826],
                    [SourceName.CVA]: [139471, 7687, 112826],
                    [SourceName.CVS]: [10829, 571, 2626],
                    [SourceName.GOO]: [139471, 7687, 112826],
                    [SourceName.WIK]: [139471, 7687, 112826],
                    [SourceName.WOD]: null
                }
            }),
            105: new LocalCountryModel({
                id: 105,
                populationCount: 6500721,
                sourcesData: {
                    [SourceName.CAC]: [45960, 1327, 41112],
                    [SourceName.CLN]: [46242, 1351, 41338],
                    [SourceName.COA]: [45960, 1327, 45960],
                    [SourceName.CVA]: [46242, 1351, 41338],
                    [SourceName.CVS]: [1112, 23, 405],
                    [SourceName.GOO]: [46242, 1351, 41338],
                    [SourceName.WIK]: [45960, 1343, 41112],
                    [SourceName.WOD]: [46242, 1351, 41338]
                }
            }),
            106: new LocalCountryModel({
                id: 106,
                populationCount: 56286961,
                sources: null
            }),
            107: new LocalCountryModel({
                id: 107,
                populationCount: 1424342,
                sourcesData: {
                    [SourceName.CAC]: [5264, 86, 5123],
                    [SourceName.CLN]: [5277, 86, 5136],
                    [SourceName.COA]: [5277, 86, 5136],
                    [SourceName.CVA]: [5277, 86, 5136],
                    [SourceName.CVS]: [583, 7, 13],
                    [SourceName.GOO]: [5277, 86, 5136],
                    [SourceName.WIK]: [5277, 86, 5136],
                    [SourceName.WOD]: null
                }
            }),
            108: new LocalCountryModel({
                id: 108,
                populationCount: 3569280,
                sourcesData: {
                    [SourceName.CAC]: [1252, 1, 643],
                    [SourceName.CLN]: [1320, 3, 767],
                    [SourceName.COA]: [1252, 1, 643],
                    [SourceName.CVA]: [1320, 3, 767],
                    [SourceName.CVS]: [39, 0, 38],
                    [SourceName.GOO]: [1320, 3, 767],
                    [SourceName.WIK]: [1320, 3, 767],
                    [SourceName.WOD]: null
                }
            }),
            109: new LocalCountryModel({
                id: 109,
                populationCount: 1326368,
                sourcesData: {
                    [SourceName.CAC]: [27256, 226, 17664],
                    [SourceName.CLN]: [28789, 241, 19205],
                    [SourceName.COA]: [28406, 234, 19027],
                    [SourceName.CVA]: [28789, 241, 19205],
                    [SourceName.CVS]: [1758, 62, 909],
                    [SourceName.GOO]: [28789, 241, 19205],
                    [SourceName.WIK]: [28789, 241, 19205],
                    [SourceName.WOD]: [28789, 241, 19205]
                }
            }),
            110: new LocalCountryModel({
                id: 110,
                populationCount: 1165503,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: [9482, 216, 7073],
                    [SourceName.COA]: [9482, 216, 7073],
                    [SourceName.CVA]: [9482, 216, 7073],
                    [SourceName.CVS]: [187, 2, 51],
                    [SourceName.GOO]: [9482, 216, 7073],
                    [SourceName.WIK]: [9482, 216, 7073],
                    [SourceName.WOD]: null
                }
            }),
            111: new LocalCountryModel({
                id: 111,
                populationCount: 116278739,
                sourcesData: {
                    [SourceName.CAC]: [123856, 1918, 111870],
                    [SourceName.CLN]: [124652, 1937, 112251],
                    [SourceName.COA]: [124652, 1937, 112251],
                    [SourceName.CVA]: [124652, 1937, 112251],
                    [SourceName.CVS]: [272, 5, 108],
                    [SourceName.GOO]: [124652, 1937, 112251],
                    [SourceName.WIK]: [124652, 1937, 112251],
                    [SourceName.WOD]: null
                }
            }),
            112: new LocalCountryModel({
                id: 112,
                populationCount: 3480,
                sourcesData: {
                    [SourceName.CAC]: [29, 0, 17],
                    [SourceName.CLN]: [29, 0, 17],
                    [SourceName.COA]: null,
                    [SourceName.CVA]: [29, 0, 17],
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: [29, 0, 17],
                    [SourceName.WIK]: [29, 0, 17],
                    [SourceName.WOD]: null
                }
            }),
            113: new LocalCountryModel({
                id: 113,
                populationCount: 48863,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: [610, 0, 551],
                    [SourceName.COA]: null,
                    [SourceName.CVA]: [610, 0, 551],
                    [SourceName.CVS]: [187, 0, 187],
                    [SourceName.GOO]: [610, 0, 551],
                    [SourceName.WIK]: [610, 0, 551],
                    [SourceName.WOD]: null
                }
            }),
            114: new LocalCountryModel({
                id: 114,
                populationCount: 899282,
                sourcesData: {
                    [SourceName.CAC]: [49, 2, 44],
                    [SourceName.CLN]: [49, 2, 44],
                    [SourceName.COA]: [49, 2, 44],
                    [SourceName.CVA]: [49, 2, 44],
                    [SourceName.CVS]: [18, 0, 14],
                    [SourceName.GOO]: [49, 2, 44],
                    [SourceName.WIK]: [49, 2, 44],
                    [SourceName.WOD]: null
                }
            }),
            115: new LocalCountryModel({
                id: 115,
                populationCount: 5545058,
                sourcesData: {
                    [SourceName.CAC]: [35858, 556, 29000],
                    [SourceName.CLN]: [36604, 561, 29000],
                    [SourceName.COA]: [36403, 561, 29000],
                    [SourceName.CVA]: [36604, 561, 29000],
                    [SourceName.CVS]: [6145, 287, 4300],
                    [SourceName.GOO]: [36604, 561, 29000],
                    [SourceName.WIK]: [36604, 561, 26000],
                    [SourceName.WOD]: [36604, 561, 29000]
                }
            }),
            116: new LocalCountryModel({
                id: 116,
                populationCount: 6589069,
                sources: null
            }),
            117: new LocalCountryModel({
                id: 117,
                populationCount: 65346760,
                sourcesData: {
                    [SourceName.CAC]: [2600498, 64381, 193045],
                    [SourceName.CLN]: [2639773, 64765, 194221],
                    [SourceName.COA]: [2697014, 64892, 200822],
                    [SourceName.CVA]: [2639773, 64765, 194221],
                    [SourceName.CVS]: [178870, 27425, 59605],
                    [SourceName.GOO]: [2639773, 64765, 194221],
                    [SourceName.WIK]: [2639773, 64765, 194221],
                    [SourceName.WOD]: [2639773, 64765, 194221]
                }
            }),
            118: new LocalCountryModel({
                id: 118,
                populationCount: 302186,
                sourcesData: {
                    [SourceName.CAC]: [13045, 71, 9995],
                    [SourceName.CLN]: [13273, 71, 9995],
                    [SourceName.COA]: null,
                    [SourceName.CVA]: [13273, 71, 9995],
                    [SourceName.CVS]: [164, 1, 124],
                    [SourceName.GOO]: [13273, 71, 9995],
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: [13273, 71, 9995]
                }
            }),
            119: new LocalCountryModel({
                id: 119,
                populationCount: 281742,
                sourcesData: {
                    [SourceName.CAC]: [16851, 114, 4842],
                    [SourceName.CLN]: [16926, 114, 4842],
                    [SourceName.COA]: null,
                    [SourceName.CVA]: [16926, 114, 4842],
                    [SourceName.CVS]: [60, 0, 59],
                    [SourceName.GOO]: [16926, 114, 4842],
                    [SourceName.WIK]: [16926, 114, 5167],
                    [SourceName.WOD]: null
                }
            }),
            120: new LocalCountryModel({
                id: 120,
                populationCount: 400,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            121: new LocalCountryModel({
                id: 121,
                populationCount: 1216524,
                sourcesData: {
                    [SourceName.CAC]: null,
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            122: new LocalCountryModel({
                id: 122,
                populationCount: 2250595,
                sourcesData: {
                    [SourceName.CAC]: [9571, 64, 9388],
                    [SourceName.CLN]: [9571, 64, 9388],
                    [SourceName.COA]: [9571, 64, 9388],
                    [SourceName.CVA]: [9571, 64, 9388],
                    [SourceName.CVS]: [1104, 10, 182],
                    [SourceName.GOO]: [9571, 64, 9388],
                    [SourceName.WIK]: [9510, 64, 9356],
                    [SourceName.WOD]: null
                }
            }),
            123: new LocalCountryModel({
                id: 123,
                populationCount: 134535,
                sources: null
            }),
            124: new LocalCountryModel({
                id: 124,
                populationCount: 2701743,
                sources: null
            }),
            125: new LocalCountryModel({
                id: 125,
                populationCount: 390407,
                sources: null
            }),
            126: new LocalCountryModel({
                id: 126,
                populationCount: 2448204,
                sourcesData: {
                    [SourceName.CAC]: [3797, 124, 3664],
                    [SourceName.CLN]: [3800, 124, 3669],
                    [SourceName.COA]: [3800, 124, 3669],
                    [SourceName.CVA]: [3800, 124, 3669],
                    [SourceName.CVS]: [23, 1, 10],
                    [SourceName.GOO]: [3800, 124, 3669],
                    [SourceName.WIK]: [3797, 124, 3668],
                    [SourceName.WOD]: null
                }
            }),
            127: new LocalCountryModel({
                id: 127,
                populationCount: 1850000,
                sources: null
            }),
            128: new LocalCountryModel({
                id: 128,
                populationCount: 3984996,
                sourcesData: {
                    [SourceName.CAC]: [225893, 2481, 210445],
                    [SourceName.CLN]: [228752, 2572, 217973],
                    [SourceName.COA]: [228410, 2528, 214992],
                    [SourceName.CVA]: [228752, 2572, 217973],
                    [SourceName.CVS]: [667, 12, 383],
                    [SourceName.GOO]: [228752, 2572, 217973],
                    [SourceName.WIK]: [228410, 2528, 214992],
                    [SourceName.WOD]: null
                }
            }),
            129: new LocalCountryModel({
                id: 129,
                populationCount: 83883554,
                sourcesData: {
                    [SourceName.CAC]: [1710992, 33172, 1302600],
                    [SourceName.CLN]: [1762525, 34519, 1368100],
                    [SourceName.COA]: [1762637, 34145, 1388744],
                    [SourceName.CVA]: [1762525, 34519, 1368100],
                    [SourceName.CVS]: [174975, 7928, 150300],
                    [SourceName.GOO]: [1763860, 34720, 1428843],
                    [SourceName.WIK]: [1755937, 34388, 1350634],
                    [SourceName.WOD]: [1762504, 34388, 1368100]
                }
            }),
            130: new LocalCountryModel({
                id: 130,
                populationCount: 31371610,
                sourcesData: {
                    [SourceName.CAC]: [54771, 335, 53594],
                    [SourceName.CLN]: [54930, 335, 53758],
                    [SourceName.COA]: [54930, 335, 53758],
                    [SourceName.CVA]: [54930, 335, 53758],
                    [SourceName.CVS]: [5530, 24, 674],
                    [SourceName.GOO]: [54930, 335, 53758],
                    [SourceName.WIK]: [54930, 335, 53758],
                    [SourceName.WOD]: null
                }
            }),
            131: new LocalCountryModel({
                id: 131,
                populationCount: 33691,
                sourcesData: {
                    [SourceName.CAC]: [1973, 6, 1216],
                    [SourceName.CLN]: [2212, 7, 1249],
                    [SourceName.COA]: null,
                    [SourceName.CVA]: [2212, 7, 1249],
                    [SourceName.CVS]: [147, 0, 144],
                    [SourceName.GOO]: [2304, 7, 1274],
                    [SourceName.WIK]: [2212, 6, 1249],
                    [SourceName.WOD]: null
                }
            }),
            132: new LocalCountryModel({
                id: 132,
                populationCount: 1249000,
                sources: null
            }),
            133: new LocalCountryModel({
                id: 133,
                populationCount: 226900,
                sources: null
            }),
            134: new LocalCountryModel({
                id: 134,
                populationCount: 10400362,
                sourcesData: {
                    [SourceName.CAC]: [137918, 4788, 9989],
                    [SourceName.CLN]: [139447, 4881, 9989],
                    [SourceName.COA]: [139447, 4881, 93764],
                    [SourceName.CVA]: [139447, 4881, 9989],
                    [SourceName.CVS]: [2770, 156, 1374],
                    [SourceName.GOO]: [139447, 4881, 9989],
                    [SourceName.WIK]: [139447, 4881, null],
                    [SourceName.WOD]: [139447, 4881, 9989]
                }
            }),
            135: new LocalCountryModel({
                id: 135,
                populationCount: 56770,
                sourcesData: {
                    [SourceName.CAC]: [27, 0, 20],
                    [SourceName.CLN]: [27, 0, 21],
                    [SourceName.COA]: null,
                    [SourceName.CVA]: [27, 0, 21],
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: [27, 0, 21],
                    [SourceName.WIK]: [27, 0, 21],
                    [SourceName.WOD]: null
                }
            }),
            136: new LocalCountryModel({
                id: 136,
                populationCount: 112690,
                sourcesData: {
                    [SourceName.CAC]: [127, 0, 107],
                    [SourceName.CLN]: [127, 0, 107],
                    [SourceName.COA]: [127, 0, 107],
                    [SourceName.CVA]: [127, 0, 107],
                    [SourceName.CVS]: [21, 0, 14],
                    [SourceName.GOO]: [134, 0, 107],
                    [SourceName.WIK]: [103, 0, 49],
                    [SourceName.WOD]: null
                }
            }),
            137: new LocalCountryModel({
                id: 137,
                populationCount: 400124,
                sourcesData: {
                    [SourceName.CAC]: [8660, 154, 2242],
                    [SourceName.CLN]: [8660, 154, 2242],
                    [SourceName.COA]: null,
                    [SourceName.CVA]: [8660, 154, 2242],
                    [SourceName.CVS]: [155, 13, 109],
                    [SourceName.GOO]: [8660, 155, 2242],
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: [8660, 154, 2242]
                }
            }),
            138: new LocalCountryModel({
                id: 138,
                populationCount: 169609,
                sourcesData: {
                    [SourceName.CAC]: [32, 1, 0],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: [32, 1, 0],
                    [SourceName.GOO]: [7326, 122, 7047],
                    [SourceName.WIK]: [7257, 121, 6707],
                    [SourceName.WOD]: null
                }
            }),
            139: new LocalCountryModel({
                id: 139,
                populationCount: 48380000,
                sources: null
            }),
            140: new LocalCountryModel({
                id: 140,
                populationCount: 18067573,
                sourcesData: {
                    [SourceName.CAC]: [137166, 4803, 125630],
                    [SourceName.CLN]: [138236, 4820, 126606],
                    [SourceName.COA]: [138236, 4820, 126606],
                    [SourceName.CVA]: [138236, 4820, 126606],
                    [SourceName.CVS]: [1518, 29, 129],
                    [SourceName.GOO]: [138236, 4820, 126606],
                    [SourceName.WIK]: [138236, 4820, 126606],
                    [SourceName.WOD]: [138236, 4820, 126606]
                }
            }),
            141: new LocalCountryModel({
                id: 141,
                populationCount: 63021,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: [299, 13, 279],
                    [SourceName.WOD]: null
                }
            }),
            142: new LocalCountryModel({
                id: 142,
                populationCount: 13294311,
                sourcesData: {
                    [SourceName.CAC]: [13707, 80, 13117],
                    [SourceName.CLN]: [13738, 81, 13153],
                    [SourceName.COA]: [13738, 81, 13153],
                    [SourceName.CVA]: [13738, 81, 13153],
                    [SourceName.CVS]: [2473, 15, 895],
                    [SourceName.GOO]: [13738, 81, 13153],
                    [SourceName.WIK]: [13630, 80, 13039],
                    [SourceName.WOD]: null
                }
            }),
            143: new LocalCountryModel({
                id: 143,
                populationCount: 1989525,
                sourcesData: {
                    [SourceName.CAC]: [2452, 45, 2397],
                    [SourceName.CLN]: [2452, 45, 2397],
                    [SourceName.COA]: [2452, 45, 2397],
                    [SourceName.CVA]: [2452, 45, 2397],
                    [SourceName.CVS]: [913, 3, 26],
                    [SourceName.GOO]: [2452, 45, 2397],
                    [SourceName.WIK]: [2447, 44, 2337],
                    [SourceName.WOD]: null
                }
            }),
            144: new LocalCountryModel({
                id: 144,
                populationCount: 788387,
                sourcesData: {
                    [SourceName.CAC]: [6319, 164, 5809],
                    [SourceName.CLN]: [6348, 164, 5868],
                    [SourceName.COA]: [6348, 164, 5868],
                    [SourceName.CVA]: [6348, 164, 5868],
                    [SourceName.CVS]: [113, 10, 42],
                    [SourceName.GOO]: [6348, 164, 5868],
                    [SourceName.WIK]: [6332, 164, 5820],
                    [SourceName.WOD]: [6348, 164, 5868]
                }
            }),
            145: new LocalCountryModel({
                id: 145,
                populationCount: 11466267,
                sourcesData: {
                    [SourceName.CAC]: [9999, 236, 8598],
                    [SourceName.CLN]: [10015, 236, 8624],
                    [SourceName.COA]: [10015, 236, 8624],
                    [SourceName.CVA]: [10015, 236, 8624],
                    [SourceName.CVS]: [273, 20, 18],
                    [SourceName.GOO]: [10015, 236, 8624],
                    [SourceName.WIK]: [10077, 236, 8657],
                    [SourceName.WOD]: null
                }
            }),
            146: new LocalCountryModel({
                id: 146,
                populationCount: 0,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            147: new LocalCountryModel({
                id: 147,
                populationCount: 1771636,
                sources: null
            }),
            148: new LocalCountryModel({
                id: 148,
                populationCount: 9976855,
                sourcesData: {
                    [SourceName.CAC]: [120912, 3111, 56580],
                    [SourceName.CLN]: [122974, 3160, 56936],
                    [SourceName.COA]: [122974, 3160, 56936],
                    [SourceName.CVA]: [122974, 3160, 56936],
                    [SourceName.CVS]: [2255, 123, 237],
                    [SourceName.GOO]: [122974, 3160, 56936],
                    [SourceName.WIK]: [122974, 3160, 56936],
                    [SourceName.WOD]: [122974, 3160, 56936]
                }
            }),
            149: new LocalCountryModel({
                id: 149,
                populationCount: 7523511,
                sourcesData: {
                    [SourceName.CAC]: [8779, 147, 7722],
                    [SourceName.CLN]: [8924, 150, 7968],
                    [SourceName.COA]: null,
                    [SourceName.CVA]: [8924, 150, 7968],
                    [SourceName.CVS]: [1052, 4, 1009],
                    [SourceName.GOO]: [8924, 150, 7968],
                    [SourceName.WIK]: [8924, 150, 7968],
                    [SourceName.WOD]: null
                }
            }),
            150: new LocalCountryModel({
                id: 150,
                populationCount: 0,
                sources: null
            }),
            151: new LocalCountryModel({
                id: 151,
                populationCount: 9648504,
                sourcesData: {
                    [SourceName.CAC]: [319543, 9429, 144234],
                    [SourceName.CLN]: [326688, 9781, 164403],
                    [SourceName.COA]: [325278, 9667, 157063],
                    [SourceName.CVA]: [326688, 9781, 164403],
                    [SourceName.CVS]: [3380, 436, 1169],
                    [SourceName.GOO]: [326688, 9781, 164403],
                    [SourceName.WIK]: [326688, 9781, 164403],
                    [SourceName.WOD]: [326688, 9781, 164403]
                }
            }),
            152: new LocalCountryModel({
                id: 152,
                populationCount: 342244,
                sourcesData: {
                    [SourceName.CAC]: [5754, 29, 5578],
                    [SourceName.CLN]: [5754, 29, 5578],
                    [SourceName.COA]: [5754, 29, 5578],
                    [SourceName.CVA]: [5754, 29, 5578],
                    [SourceName.CVS]: [1802, 10, 1780],
                    [SourceName.GOO]: [5754, 29, 5578],
                    [SourceName.WIK]: [5754, 29, 5578],
                    [SourceName.WOD]: [5754, 29, 5578]
                }
            }),
            153: new LocalCountryModel({
                id: 153,
                populationCount: 1386210388,
                sourcesData: {
                    [SourceName.CAC]: [10267283, 148774, 9859762],
                    [SourceName.CLN]: [10305788, 149218, 9906387],
                    [SourceName.COA]: [10286709, 148994, 9883461],
                    [SourceName.CVA]: [10305788, 149218, 9906387],
                    [SourceName.CVS]: [81997, 2649, 27969],
                    [SourceName.GOO]: [10307034, 149261, 9906387],
                    [SourceName.WIK]: [10286709, 148994, 9883461],
                    [SourceName.WOD]: [10305788, 149218, 9906387]
                }
            }),
            154: new LocalCountryModel({
                id: 154,
                populationCount: 173667,
                sources: null
            }),
            155: new LocalCountryModel({
                id: 155,
                populationCount: 274849611,
                sourcesData: {
                    [SourceName.CAC]: [735124, 21944, 603741],
                    [SourceName.CLN]: [758473, 22555, 625518],
                    [SourceName.COA]: [751270, 22329, 617936],
                    [SourceName.CVA]: [758473, 22555, 625518],
                    [SourceName.CVS]: [16006, 1043, 3518],
                    [SourceName.GOO]: [758473, 22555, 625518],
                    [SourceName.WIK]: [758473, 22555, 625518],
                    [SourceName.WOD]: [758473, 22555, 625518]
                }
            }),
            156: new LocalCountryModel({
                id: 156,
                populationCount: 488043,
                sources: null
            }),
            157: new LocalCountryModel({
                id: 157,
                populationCount: 25050000,
                sources: null
            }),
            158: new LocalCountryModel({
                id: 158,
                populationCount: 84469320,
                sourcesData: {
                    [SourceName.CAC]: [1218753, 55095, 978714],
                    [SourceName.CLN]: [1231429, 55337, 995570],
                    [SourceName.COA]: [1231429, 55337, 995570],
                    [SourceName.CVA]: [1231429, 55337, 995570],
                    [SourceName.CVS]: [114533, 6854, 90539],
                    [SourceName.GOO]: [1231429, 55337, 995570],
                    [SourceName.WIK]: [1231429, 55337, 995570],
                    [SourceName.WOD]: [1231429, 55337, 995570]
                }
            }),
            159: new LocalCountryModel({
                id: 159,
                populationCount: 40658986,
                sourcesData: {
                    [SourceName.CAC]: [594442, 12808, 536348],
                    [SourceName.CLN]: [596193, 12824, 539817],
                    [SourceName.COA]: [596193, 12824, 539817],
                    [SourceName.CVA]: [596193, 12824, 539817],
                    [SourceName.CVS]: [3143, 115, 2028],
                    [SourceName.GOO]: [596193, 12824, 539817],
                    [SourceName.WIK]: [596193, 12824, 539817],
                    [SourceName.WOD]: [596193, 12824, 539817]
                }
            }),
            160: new LocalCountryModel({
                id: 160,
                populationCount: 4959811,
                sourcesData: {
                    [SourceName.CAC]: [90157, 2226, 23364],
                    [SourceName.CLN]: [93532, 2248, 23364],
                    [SourceName.COA]: [93532, 2248, 23364],
                    [SourceName.CVA]: [93532, 2248, 23364],
                    [SourceName.CVS]: [23827, 1506, 19470],
                    [SourceName.GOO]: [93532, 2248, 23364],
                    [SourceName.WIK]: [93532, 2248, 24000],
                    [SourceName.WOD]: [93532, 2248, 23364]
                }
            }),
            161: new LocalCountryModel({
                id: 161,
                populationCount: 85033,
                sourcesData: {
                    [SourceName.CAC]: [377, 25, 348],
                    [SourceName.CLN]: [377, 25, 348],
                    [SourceName.COA]: null,
                    [SourceName.CVA]: [377, 25, 348],
                    [SourceName.CVS]: [332, 23, 285],
                    [SourceName.GOO]: [377, 25, 348],
                    [SourceName.WIK]: [377, 25, 345],
                    [SourceName.WOD]: null
                }
            }),
            162: new LocalCountryModel({
                id: 162,
                populationCount: 8716938,
                sourcesData: {
                    [SourceName.CAC]: [416584, 3307, 372284],
                    [SourceName.CLN]: [428510, 3356, 379911],
                    [SourceName.COA]: [428510, 3356, 379910],
                    [SourceName.CVA]: [428510, 3356, 379911],
                    [SourceName.CVS]: [16579, 265, 12521],
                    [SourceName.GOO]: [428510, 3356, 379911],
                    [SourceName.WIK]: [428510, 3356, 379911],
                    [SourceName.WOD]: [428510, 3356, 379911]
                }
            }),
            163: new LocalCountryModel({
                id: 163,
                displayName: 'Italy',
                populationCount: 60433961,
                sourcesData: {
                    [SourceName.CAC]: [2083689, 73604, 1445690],
                    [SourceName.CLN]: [2129376, 74621, 1479988],
                    [SourceName.COA]: [2129376, 74621, 1479988],
                    [SourceName.CVA]: [2129376, 74621, 1479988],
                    [SourceName.CVS]: [223096, 31368, 115288],
                    [SourceName.GOO]: [2129376, 74621, 1479988],
                    [SourceName.WIK]: [2129376, 74621, 1479988],
                    [SourceName.WOD]: [2129376, 74621, 1479988]
                }
            }),
            164: new LocalCountryModel({
                id: 164,
                populationCount: 2966840,
                sourcesData: {
                    [SourceName.CAC]: [12793, 302, 10319],
                    [SourceName.CLN]: [12915, 303, 10532],
                    [SourceName.COA]: [12915, 303, 10532],
                    [SourceName.CVA]: [12915, 303, 10532],
                    [SourceName.CVS]: [509, 9, 118],
                    [SourceName.GOO]: [12915, 303, 10532],
                    [SourceName.WIK]: [12750, 298, 10252],
                    [SourceName.WOD]: null
                }
            }),
            165: new LocalCountryModel({
                id: 165,
                populationCount: 9944283,
                sources: null
            }),
            166: new LocalCountryModel({
                id: 166,
                populationCount: 126302264,
                sourcesData: {
                    [SourceName.CAC]: [226596, 3349, 189466],
                    [SourceName.CLN]: [234395, 3460, 193714],
                    [SourceName.COA]: [239068, 3342, 193558],
                    [SourceName.CVA]: [234395, 3460, 193714],
                    [SourceName.CVS]: [16120, 697, 9868],
                    [SourceName.GOO]: [242042, 3563, 196420],
                    [SourceName.WIK]: [238012, 3514, 196420],
                    [SourceName.WOD]: null
                }
            }),
            167: new LocalCountryModel({
                id: 167,
                populationCount: 0,
                sources: null
            }),
            168: new LocalCountryModel({
                id: 168,
                populationCount: 692032,
                sources: null
            }),
            169: new LocalCountryModel({
                id: 169,
                populationCount: 107800,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: [3059, 60, 2445],
                    [SourceName.COA]: null,
                    [SourceName.CVA]: [3059, 60, 2445],
                    [SourceName.CVS]: [549, 43, 456],
                    [SourceName.GOO]: [3059, 60, 2445],
                    [SourceName.WIK]: [2726, 42, 1978],
                    [SourceName.WOD]: null
                }
            }),
            170: new LocalCountryModel({
                id: 170,
                populationCount: 162014,
                sources: null
            }),
            171: new LocalCountryModel({
                id: 171,
                populationCount: 0,
                sources: null
            }),
            172: new LocalCountryModel({
                id: 172,
                populationCount: 10259364,
                sourcesData: {
                    [SourceName.CAC]: [293067, 3815, 268843],
                    [SourceName.CLN]: [295765, 3851, 271834],
                    [SourceName.COA]: [295765, 3851, 271834],
                    [SourceName.CVA]: [295765, 3851, 271834],
                    [SourceName.CVS]: [586, 9, 393],
                    [SourceName.GOO]: [295765, 3851, 271834],
                    [SourceName.WIK]: [295765, 3851, 271834],
                    [SourceName.WOD]: null
                }
            }),
            173: new LocalCountryModel({
                id: 173,
                populationCount: 1360633,
                sources: null
            }),
            174: new LocalCountryModel({
                id: 174,
                populationCount: 865828,
                sources: null
            }),
            175: new LocalCountryModel({
                id: 175,
                populationCount: 1689441,
                sources: null
            }),
            176: new LocalCountryModel({
                id: 176,
                populationCount: 275413,
                sources: null
            }),
            177: new LocalCountryModel({
                id: 177,
                populationCount: 466305,
                sources: null
            }),
            178: new LocalCountryModel({
                id: 178,
                populationCount: 1817500,
                sources: null
            }),
            179: new LocalCountryModel({
                id: 179,
                populationCount: 622484,
                sources: null
            }),
            180: new LocalCountryModel({
                id: 180,
                populationCount: 286627,
                sources: null
            }),
            181: new LocalCountryModel({
                id: 181,
                populationCount: 1574079,
                sources: null
            }),
            182: new LocalCountryModel({
                id: 182,
                populationCount: 18879656,
                sourcesData: {
                    [SourceName.CAC]: [153925, 2262, 141731],
                    [SourceName.CLN]: [156220, 2262, 143607],
                    [SourceName.COA]: [202060, 2765, 176774],
                    [SourceName.CVA]: [156220, 2262, 143607],
                    [SourceName.CVS]: [5571, 32, 2531],
                    [SourceName.GOO]: [202159, 2767, 176842],
                    [SourceName.WIK]: [155473, 2262, 143075],
                    [SourceName.WOD]: [156220, 2262, 143607]
                }
            }),
            183: new LocalCountryModel({
                id: 183,
                populationCount: 54321417,
                sourcesData: {
                    [SourceName.CAC]: [96251, 1667, 78475],
                    [SourceName.CLN]: [96614, 1681, 78802],
                    [SourceName.COA]: [96614, 1681, 78802],
                    [SourceName.CVA]: [96614, 1681, 78802],
                    [SourceName.CVS]: [758, 42, 284],
                    [SourceName.GOO]: [96614, 1681, 78802],
                    [SourceName.WIK]: [96614, 1681, 78802],
                    [SourceName.WOD]: null
                }
            }),
            184: new LocalCountryModel({
                id: 184,
                populationCount: 537513,
                sources: null
            }),
            185: new LocalCountryModel({
                id: 185,
                populationCount: 0,
                sources: null
            }),
            186: new LocalCountryModel({
                id: 186,
                populationCount: 120283,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: [0, 0, 0],
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            187: new LocalCountryModel({
                id: 187,
                populationCount: 840873,
                sources: null
            }),
            188: new LocalCountryModel({
                id: 188,
                populationCount: 5678245,
                sources: null
            }),
            189: new LocalCountryModel({
                id: 189,
                populationCount: 1782115,
                sourcesData: {
                    [SourceName.CAC]: null,
                    [SourceName.CLN]: null,
                    [SourceName.COA]: [51502, 1336, 41854],
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: [51285, 1325, 39134],
                    [SourceName.WIK]: [50405, 1305, 39134],
                    [SourceName.WOD]: null
                }
            }),
            190: new LocalCountryModel({
                id: 190,
                populationCount: 5122747,
                sources: null
            }),
            191: new LocalCountryModel({
                id: 191,
                populationCount: 4303275,
                sourcesData: {
                    [SourceName.CAC]: [150298, 933, 146284],
                    [SourceName.CLN]: [150869, 936, 146777],
                    [SourceName.COA]: [150869, 936, 146777],
                    [SourceName.CVA]: [150869, 936, 146777],
                    [SourceName.CVS]: [11975, 88, 3451],
                    [SourceName.GOO]: [150869, 936, 146777],
                    [SourceName.WIK]: [150869, 936, 146777],
                    [SourceName.WOD]: [150869, 936, 146777]
                }
            }),
            192: new LocalCountryModel({
                id: 192,
                populationCount: 6572917,
                sourcesData: {
                    [SourceName.CAC]: [80843, 1354, 75624],
                    [SourceName.CLN]: [81214, 1358, 76351],
                    [SourceName.COA]: [81156, 1356, 76148],
                    [SourceName.CVA]: [81214, 1358, 76351],
                    [SourceName.CVS]: [1082, 12, 735],
                    [SourceName.GOO]: [81214, 1358, 76351],
                    [SourceName.WIK]: [81156, 1356, 76148],
                    [SourceName.WOD]: [81214, 1358, 76351]
                }
            }),
            193: new LocalCountryModel({
                id: 193,
                populationCount: 7323114,
                sourcesData: {
                    [SourceName.CAC]: [41, 0, 40],
                    [SourceName.CLN]: [41, 0, 40],
                    [SourceName.COA]: [41, 0, 40],
                    [SourceName.CVA]: [41, 0, 40],
                    [SourceName.CVS]: [19, 0, 14],
                    [SourceName.GOO]: [41, 0, 40],
                    [SourceName.WIK]: [41, 0, 40],
                    [SourceName.WOD]: null
                }
            }),
            194: new LocalCountryModel({
                id: 194,
                populationCount: 1876854,
                sourcesData: {
                    [SourceName.CAC]: [39043, 626, 27113],
                    [SourceName.CLN]: [41615, 644, 29018],
                    [SourceName.COA]: [41615, 644, 29018],
                    [SourceName.CVA]: [41615, 644, 29018],
                    [SourceName.CVS]: [962, 19, 627],
                    [SourceName.GOO]: [41615, 644, 29018],
                    [SourceName.WIK]: [41615, 644, 29018],
                    [SourceName.WOD]: [41615, 644, 29018]
                }
            }),
            195: new LocalCountryModel({
                id: 195,
                populationCount: 6825946,
                sourcesData: {
                    [SourceName.CAC]: [177996, 1456, 126460],
                    [SourceName.CLN]: [183888, 1479, 127959],
                    [SourceName.COA]: [183888, 1479, 127959],
                    [SourceName.CVA]: [183888, 1479, 127959],
                    [SourceName.CVS]: [886, 26, 236],
                    [SourceName.GOO]: [183888, 1479, 127959],
                    [SourceName.WIK]: [183888, 1479, 127959],
                    [SourceName.WOD]: null
                }
            }),
            196: new LocalCountryModel({
                id: 196,
                populationCount: 2149924,
                sourcesData: {
                    [SourceName.CAC]: [3094, 51, 1480],
                    [SourceName.CLN]: [3206, 65, 1496],
                    [SourceName.COA]: [3206, 51, 1496],
                    [SourceName.CVA]: [3206, 65, 1496],
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: [3206, 65, 1496],
                    [SourceName.WIK]: [2725, 51, 1466],
                    [SourceName.WOD]: null
                }
            }),
            197: new LocalCountryModel({
                id: 197,
                populationCount: 5112910,
                sourcesData: {
                    [SourceName.CAC]: [1779, 83, 1406],
                    [SourceName.CLN]: [1779, 83, 1406],
                    [SourceName.COA]: [1779, 83, 1406],
                    [SourceName.CVA]: [1779, 83, 1406],
                    [SourceName.CVS]: [215, 20, 105],
                    [SourceName.GOO]: [1800, 83, 1418],
                    [SourceName.WIK]: [1779, 83, 1406],
                    [SourceName.WOD]: null
                }
            }),
            198: new LocalCountryModel({
                id: 198,
                populationCount: 6910670,
                sourcesData: {
                    [SourceName.CAC]: [99935, 1459, 71273],
                    [SourceName.CLN]: [100744, 1487, 73252],
                    [SourceName.COA]: [100744, 1487, 73252],
                    [SourceName.CVA]: [100744, 1487, 73252],
                    [SourceName.CVS]: [64, 3, 28],
                    [SourceName.GOO]: [100744, 1487, 73252],
                    [SourceName.WIK]: [100744, 1487, 73252],
                    [SourceName.WOD]: null
                }
            }),
            199: new LocalCountryModel({
                id: 199,
                populationCount: 38128,
                sourcesData: {
                    [SourceName.CAC]: [2104, 39, 1810],
                    [SourceName.CLN]: [2104, 39, 1810],
                    [SourceName.COA]: [2175, 39, 1810],
                    [SourceName.CVA]: [2104, 39, 1810],
                    [SourceName.CVS]: [82, 1, 55],
                    [SourceName.GOO]: [2221, 39, 1810],
                    [SourceName.WIK]: [2104, 39, 1810],
                    [SourceName.WOD]: null
                }
            }),
            200: new LocalCountryModel({
                id: 200,
                populationCount: 2706104,
                sourcesData: {
                    [SourceName.CAC]: [138219, 1422, 66485],
                    [SourceName.CLN]: [145399, 1614, 76703],
                    [SourceName.COA]: [143903, 1589, 71028],
                    [SourceName.CVA]: [145399, 1614, 76703],
                    [SourceName.CVS]: [1511, 54, 934],
                    [SourceName.GOO]: [145399, 1614, 76703],
                    [SourceName.WIK]: [145399, 1614, 76703],
                    [SourceName.WOD]: [145399, 1614, 76703]
                }
            }),
            201: new LocalCountryModel({
                id: 201,
                populationCount: 1464039,
                sourcesData: {
                    [SourceName.CAC]: null,
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: [2059, 170, 1720],
                    [SourceName.WOD]: null
                }
            }),
            202: new LocalCountryModel({
                id: 202,
                populationCount: 630483,
                sourcesData: {
                    [SourceName.CAC]: [46415, 495, 40978],
                    [SourceName.CLN]: [46817, 501, 40978],
                    [SourceName.COA]: [46415, 495, 40978],
                    [SourceName.CVA]: [46817, 501, 40978],
                    [SourceName.CVS]: [3915, 103, 3665],
                    [SourceName.GOO]: [46817, 501, 40978],
                    [SourceName.WIK]: [46817, 501, 40978],
                    [SourceName.WOD]: [46817, 501, 40978]
                }
            }),
            203: new LocalCountryModel({
                id: 203,
                populationCount: 653673,
                sourcesData: {
                    [SourceName.CAC]: [46, 0, 46],
                    [SourceName.CLN]: [46, 0, 46],
                    [SourceName.COA]: null,
                    [SourceName.CVA]: [46, 0, 46],
                    [SourceName.CVS]: [45, 0, 43],
                    [SourceName.GOO]: [46, 0, 46],
                    [SourceName.WIK]: [46, 0, 46],
                    [SourceName.WOD]: null
                }
            }),
            204: new LocalCountryModel({
                id: 204,
                populationCount: 28020223,
                sourcesData: {
                    [SourceName.CAC]: [17714, 261, 17228],
                    [SourceName.CLN]: [17714, 261, 17228],
                    [SourceName.COA]: [17714, 261, 17228],
                    [SourceName.CVA]: [17714, 261, 17228],
                    [SourceName.CVS]: [230, 0, 108],
                    [SourceName.GOO]: [17714, 261, 17714],
                    [SourceName.WIK]: [17714, 261, 17228],
                    [SourceName.WOD]: null
                }
            }),
            205: new LocalCountryModel({
                id: 205,
                populationCount: 289000,
                sources: null
            }),
            206: new LocalCountryModel({
                id: 206,
                populationCount: 19360546,
                sourcesData: {
                    [SourceName.CAC]: [6471, 189, 5700],
                    [SourceName.CLN]: [6684, 191, 5708],
                    [SourceName.COA]: [6684, 191, 5708],
                    [SourceName.CVA]: [6684, 191, 5708],
                    [SourceName.CVS]: [63, 3, 24],
                    [SourceName.GOO]: [6684, 191, 5708],
                    [SourceName.WIK]: [6684, 191, 5708],
                    [SourceName.WOD]: null
                }
            }),
            207: new LocalCountryModel({
                id: 207,
                populationCount: 32553377,
                sourcesData: {
                    [SourceName.CAC]: [110485, 463, 87460],
                    [SourceName.CLN]: [117373, 483, 94492],
                    [SourceName.COA]: [115078, 474, 91171],
                    [SourceName.CVA]: [117373, 483, 94492],
                    [SourceName.CVS]: [6819, 112, 5351],
                    [SourceName.GOO]: [117373, 483, 94492],
                    [SourceName.WIK]: [117373, 483, 94492],
                    [SourceName.WOD]: null
                }
            }),
            208: new LocalCountryModel({
                id: 208,
                populationCount: 544549,
                sourcesData: {
                    [SourceName.CAC]: [13738, 48, 13125],
                    [SourceName.CLN]: [13804, 48, 13150],
                    [SourceName.COA]: [13804, 48, 13150],
                    [SourceName.CVA]: [13804, 48, 13150],
                    [SourceName.CVS]: [982, 4, 45],
                    [SourceName.GOO]: [13804, 48, 13150],
                    [SourceName.WIK]: [13804, 48, 13149],
                    [SourceName.WOD]: [13804, 48, 13150]
                }
            }),
            209: new LocalCountryModel({
                id: 209,
                populationCount: 20520637,
                sourcesData: {
                    [SourceName.CAC]: [7029, 269, 4548],
                    [SourceName.CLN]: [7203, 271, 4694],
                    [SourceName.COA]: [7203, 271, 4694],
                    [SourceName.CVA]: [7203, 271, 4694],
                    [SourceName.CVS]: [779, 46, 436],
                    [SourceName.GOO]: [7203, 271, 4694],
                    [SourceName.WIK]: [7090, 269, 4650],
                    [SourceName.WOD]: null
                }
            }),
            210: new LocalCountryModel({
                id: 210,
                populationCount: 442210,
                sourcesData: {
                    [SourceName.CAC]: [12665, 216, 11057],
                    [SourceName.CLN]: [12997, 220, 11211],
                    [SourceName.COA]: [12909, 219, 11178],
                    [SourceName.CVA]: [12997, 220, 11211],
                    [SourceName.CVS]: [522, 6, 443],
                    [SourceName.GOO]: [12997, 220, 11211],
                    [SourceName.WIK]: [12909, 219, 11178],
                    [SourceName.WOD]: [12997, 220, 11211]
                }
            }),
            211: new LocalCountryModel({
                id: 211,
                populationCount: 682333,
                sources: null
            }),
            212: new LocalCountryModel({
                id: 212,
                populationCount: 9346,
                sources: null
            }),
            213: new LocalCountryModel({
                id: 213,
                populationCount: 59190,
                sourcesData: {
                    [SourceName.CAC]: [4, 0, 4],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            214: new LocalCountryModel({
                id: 214,
                populationCount: 374931,
                sourcesData: {
                    [SourceName.CAC]: [6091, 43, 98],
                    [SourceName.CLN]: [6091, 43, 98],
                    [SourceName.COA]: [6091, 43, 98],
                    [SourceName.CVA]: [6091, 43, 98],
                    [SourceName.CVS]: [189, 14, 91],
                    [SourceName.GOO]: [6091, 43, 98],
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: [6091, 43, 98]
                }
            }),
            215: new LocalCountryModel({
                id: 215,
                populationCount: 4706222,
                sourcesData: {
                    [SourceName.CAC]: [14191, 339, 11095],
                    [SourceName.CLN]: [14581, 349, 11652],
                    [SourceName.COA]: [14581, 349, 11652],
                    [SourceName.CVA]: [14581, 349, 11652],
                    [SourceName.CVS]: [20, 2, 7],
                    [SourceName.GOO]: [14581, 349, 11652],
                    [SourceName.WIK]: [14364, 347, 11380],
                    [SourceName.WOD]: null
                }
            }),
            216: new LocalCountryModel({
                id: 216,
                populationCount: 1272602,
                sourcesData: {
                    [SourceName.CAC]: [527, 10, 496],
                    [SourceName.CLN]: [527, 10, 496],
                    [SourceName.COA]: [527, 10, 496],
                    [SourceName.CVA]: [527, 10, 496],
                    [SourceName.CVS]: [332, 10, 322],
                    [SourceName.GOO]: [527, 10, 496],
                    [SourceName.WIK]: [527, 10, 496],
                    [SourceName.WOD]: null
                }
            }),
            217: new LocalCountryModel({
                id: 217,
                populationCount: 275818,
                sourcesData: {
                    [SourceName.CAC]: [5890, 55, 2964],
                    [SourceName.CLN]: [5890, 55, 2964],
                    [SourceName.COA]: null,
                    [SourceName.CVA]: [5890, 55, 2964],
                    [SourceName.CVS]: [1210, 16, 627],
                    [SourceName.GOO]: [5890, 55, 2964],
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: [5890, 55, 2964]
                }
            }),
            218: new LocalCountryModel({
                id: 218,
                populationCount: 129552786,
                sourcesData: {
                    [SourceName.CAC]: [1413935, 124897, 1066771],
                    [SourceName.CLN]: [1437185, 126507, 1083768],
                    [SourceName.COA]: [1437185, 126507, 1083768],
                    [SourceName.CVA]: [1437185, 126507, 1083768],
                    [SourceName.CVS]: [42595, 4477, 28475],
                    [SourceName.GOO]: [1437185, 126507, 1083768],
                    [SourceName.WIK]: [1437185, 126507, 1083768],
                    [SourceName.WOD]: [1437185, 126507, 1083768]
                }
            }),
            219: new LocalCountryModel({
                id: 219,
                populationCount: 115524,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: [0, 0, 0],
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            220: new LocalCountryModel({
                id: 220,
                populationCount: 40,
                sources: null
            }),
            221: new LocalCountryModel({
                id: 221,
                populationCount: 4029792,
                sourcesData: {
                    [SourceName.CAC]: [143841, 2960, 129539],
                    [SourceName.CLN]: [145258, 3004, 131701],
                    [SourceName.COA]: [145258, 3004, 131701],
                    [SourceName.CVA]: [145258, 3004, 131701],
                    [SourceName.CVS]: [5553, 194, 2228],
                    [SourceName.GOO]: [145258, 3004, 131701],
                    [SourceName.WIK]: [145258, 3004, 131701],
                    [SourceName.WOD]: [145258, 3004, 131701]
                }
            }),
            222: new LocalCountryModel({
                id: 222,
                populationCount: 2054393,
                sources: null
            }),
            223: new LocalCountryModel({
                id: 223,
                populationCount: 39242,
                sourcesData: {
                    [SourceName.CAC]: [853, 3, 704],
                    [SourceName.CLN]: [885, 3, 718],
                    [SourceName.COA]: [885, 3, 718],
                    [SourceName.CVA]: [885, 3, 718],
                    [SourceName.CVS]: [96, 4, 87],
                    [SourceName.GOO]: [885, 3, 718],
                    [SourceName.WIK]: [573, 3, 497],
                    [SourceName.WOD]: null
                }
            }),
            224: new LocalCountryModel({
                id: 224,
                populationCount: 3302150,
                sourcesData: {
                    [SourceName.CAC]: [1215, 1, 824],
                    [SourceName.CLN]: [1242, 1, 855],
                    [SourceName.COA]: [1242, 1, 855],
                    [SourceName.CVA]: [1242, 1, 855],
                    [SourceName.CVS]: [98, 0, 15],
                    [SourceName.GOO]: [1242, 1, 855],
                    [SourceName.WIK]: [1215, 1, 830],
                    [SourceName.WOD]: null
                }
            }),
            225: new LocalCountryModel({
                id: 225,
                populationCount: 628233,
                sourcesData: {
                    [SourceName.CAC]: [47782, 681, 38367],
                    [SourceName.CLN]: [48589, 684, 38780],
                    [SourceName.COA]: [48589, 684, 38780],
                    [SourceName.CVA]: [48589, 684, 38780],
                    [SourceName.CVS]: [324, 9, 309],
                    [SourceName.GOO]: [48589, 684, 38780],
                    [SourceName.WIK]: [48589, 684, 38780],
                    [SourceName.WOD]: [48589, 684, 38780]
                }
            }),
            226: new LocalCountryModel({
                id: 226,
                populationCount: 4992,
                sourcesData: {
                    [SourceName.CAC]: [13, 1, 12],
                    [SourceName.CLN]: [13, 1, 12],
                    [SourceName.COA]: [13, 1, 12],
                    [SourceName.CVA]: [13, 1, 12],
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: [13, 1, 12],
                    [SourceName.WIK]: [13, 1, 12],
                    [SourceName.WOD]: null
                }
            }),
            227: new LocalCountryModel({
                id: 227,
                populationCount: 805056,
                sources: null
            }),
            228: new LocalCountryModel({
                id: 228,
                populationCount: 37110619,
                sourcesData: {
                    [SourceName.CAC]: [437332, 7355, 405251],
                    [SourceName.CLN]: [440970, 7425, 409638],
                    [SourceName.COA]: [440970, 7425, 409638],
                    [SourceName.CVA]: [440970, 7425, 409638],
                    [SourceName.CVS]: [6607, 190, 3310],
                    [SourceName.GOO]: [440970, 7425, 409638],
                    [SourceName.WIK]: [440970, 7425, 409638],
                    [SourceName.WOD]: null
                }
            }),
            229: new LocalCountryModel({
                id: 229,
                populationCount: 1811,
                sources: null
            }),
            230: new LocalCountryModel({
                id: 230,
                populationCount: 31659224,
                sourcesData: {
                    [SourceName.CAC]: [18485, 165, 16589],
                    [SourceName.CLN]: [18794, 167, 16680],
                    [SourceName.COA]: [18794, 167, 16680],
                    [SourceName.CVA]: [18794, 167, 16680],
                    [SourceName.CVS]: [115, 0, 35],
                    [SourceName.GOO]: [18794, 167, 16680],
                    [SourceName.WIK]: [18794, 167, 16680],
                    [SourceName.WOD]: null
                }
            }),
            231: new LocalCountryModel({
                id: 231,
                populationCount: 54582161,
                sourcesData: {
                    [SourceName.CAC]: [123740, 2664, 106121],
                    [SourceName.CLN]: [125042, 2697, 107777],
                    [SourceName.COA]: [125042, 2697, 107777],
                    [SourceName.CVA]: [125042, 2697, 107777],
                    [SourceName.CVS]: [181, 6, 84],
                    [SourceName.GOO]: [125042, 2697, 107777],
                    [SourceName.WIK]: [125042, 2697, 107777],
                    [SourceName.WOD]: null
                }
            }),
            232: new LocalCountryModel({
                id: 232,
                populationCount: 456100,
                sources: null
            }),
            233: new LocalCountryModel({
                id: 233,
                populationCount: 2561929,
                sourcesData: {
                    [SourceName.CAC]: [23333, 196, 19655],
                    [SourceName.CLN]: [24545, 208, 20727],
                    [SourceName.COA]: [24545, 208, 20727],
                    [SourceName.CVA]: [24545, 208, 20727],
                    [SourceName.CVS]: [16, 0, 12],
                    [SourceName.GOO]: [24545, 208, 20727],
                    [SourceName.WIK]: [24545, 208, 20727],
                    [SourceName.WOD]: null
                }
            }),
            234: new LocalCountryModel({
                id: 234,
                populationCount: 10824,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: [0, 0, 0],
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            235: new LocalCountryModel({
                id: 235,
                populationCount: 0,
                sources: null
            }),
            236: new LocalCountryModel({
                id: 236,
                populationCount: 29348881,
                sourcesData: {
                    [SourceName.CAC]: [260059, 1847, 251912],
                    [SourceName.CLN]: [261438, 1870, 253857],
                    [SourceName.COA]: [261019, 1864, 253107],
                    [SourceName.CVA]: [261438, 1870, 253857],
                    [SourceName.CVS]: [249, 0, 35],
                    [SourceName.GOO]: [261438, 1870, 253857],
                    [SourceName.WIK]: [261438, 1870, 253857],
                    [SourceName.WOD]: null
                }
            }),
            237: new LocalCountryModel({
                id: 237,
                populationCount: 17152392,
                sourcesData: {
                    [SourceName.CAC]: [787300, 11324, 0],
                    [SourceName.CLN]: [805164, 11529, 0],
                    [SourceName.COA]: [805164, 11529, 0],
                    [SourceName.CVA]: [805164, 11529, null],
                    [SourceName.CVS]: [43481, 5590, null],
                    [SourceName.GOO]: [805164, 11529, 0],
                    [SourceName.WIK]: [805164, 11529, null],
                    [SourceName.WOD]: [805164, 11529, null]
                }
            }),
            238: new LocalCountryModel({
                id: 238,
                populationCount: 286666,
                sourcesData: {
                    [SourceName.CAC]: [38, 0, 38],
                    [SourceName.CLN]: [38, 0, 38],
                    [SourceName.COA]: null,
                    [SourceName.CVA]: [38, 0, 38],
                    [SourceName.CVS]: [18, 0, 18],
                    [SourceName.GOO]: [38, 0, 38],
                    [SourceName.WIK]: [36, 0, 30],
                    [SourceName.WOD]: null
                }
            }),
            239: new LocalCountryModel({
                id: 239,
                populationCount: 4840420,
                sourcesData: {
                    [SourceName.CAC]: [2162, 25, 2082],
                    [SourceName.CLN]: [2162, 25, 2082],
                    [SourceName.COA]: [2162, 25, 2082],
                    [SourceName.CVA]: [2162, 25, 2082],
                    [SourceName.CVS]: [1498, 21, 1421],
                    [SourceName.GOO]: [2162, 25, 2082],
                    [SourceName.WIK]: [2116, 25, 1680],
                    [SourceName.WOD]: null
                }
            }),
            240: new LocalCountryModel({
                id: 240,
                populationCount: 6660428,
                sourcesData: {
                    [SourceName.CAC]: [6046, 165, 4225],
                    [SourceName.CLN]: [6046, 165, 4225],
                    [SourceName.COA]: [6046, 165, 4225],
                    [SourceName.CVA]: [6046, 165, 4225],
                    [SourceName.CVS]: [25, 8, 7],
                    [SourceName.GOO]: [6046, 165, 4225],
                    [SourceName.WIK]: [5938, 163, 4225],
                    [SourceName.WOD]: null
                }
            }),
            241: new LocalCountryModel({
                id: 241,
                populationCount: 24617107,
                sourcesData: {
                    [SourceName.CAC]: [3208, 102, 1767],
                    [SourceName.CLN]: [3403, 106, 1828],
                    [SourceName.COA]: [3403, 106, 1828],
                    [SourceName.CVA]: [3403, 106, 1828],
                    [SourceName.CVS]: [876, 50, 677],
                    [SourceName.GOO]: [3403, 106, 1828],
                    [SourceName.WIK]: [3323, 102, 1825],
                    [SourceName.WOD]: null
                }
            }),
            242: new LocalCountryModel({
                id: 242,
                populationCount: 208504758,
                sourcesData: {
                    [SourceName.CAC]: [86576, 1278, 73322],
                    [SourceName.CLN]: [88587, 1294, 74373],
                    [SourceName.COA]: [88587, 1294, 74373],
                    [SourceName.CVA]: [88587, 1294, 74373],
                    [SourceName.CVS]: [5162, 167, 1180],
                    [SourceName.GOO]: [88587, 1294, 74373],
                    [SourceName.WIK]: [88587, 1294, 74373],
                    [SourceName.WOD]: null
                }
            }),
            243: new LocalCountryModel({
                id: 243,
                populationCount: 6620000,
                sources: null
            }),
            244: new LocalCountryModel({
                id: 244,
                populationCount: 1626,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            245: new LocalCountryModel({
                id: 245,
                populationCount: 1735,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            246: new LocalCountryModel({
                id: 246,
                populationCount: 480874,
                sources: null
            }),
            247: new LocalCountryModel({
                id: 247,
                populationCount: 25829540,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: [0, 0, 0],
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            248: new LocalCountryModel({
                id: 248,
                populationCount: 2083207,
                sourcesData: {
                    [SourceName.CAC]: [82794, 2488, 60706],
                    [SourceName.CLN]: [83743, 2510, 61943],
                    [SourceName.COA]: [83743, 2510, 61943],
                    [SourceName.CVA]: [83743, 2510, 61943],
                    [SourceName.CVS]: [1723, 95, 1235],
                    [SourceName.GOO]: [83743, 2510, 61943],
                    [SourceName.WIK]: [83743, 2510, 61943],
                    [SourceName.WOD]: [83743, 2510, 61943]
                }
            }),
            249: new LocalCountryModel({
                id: 249,
                populationCount: 701765,
                sources: null
            }),
            250: new LocalCountryModel({
                id: 250,
                populationCount: 372486,
                sourcesData: {
                    [SourceName.CAC]: null,
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: [1412, 6, 1225],
                    [SourceName.WOD]: null
                }
            }),
            251: new LocalCountryModel({
                id: 251,
                populationCount: 1893667,
                sources: null
            }),
            252: new LocalCountryModel({
                id: 252,
                populationCount: 57559,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: [122, 2, 19],
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            253: new LocalCountryModel({
                id: 253,
                populationCount: 5441764,
                sourcesData: {
                    [SourceName.CAC]: [49010, 436, 37658],
                    [SourceName.CLN]: [49803, 436, 37658],
                    [SourceName.COA]: [49803, 436, 17998],
                    [SourceName.CVA]: [49803, 436, 37658],
                    [SourceName.CVS]: [8196, 232, 32],
                    [SourceName.GOO]: [49803, 436, 37658],
                    [SourceName.WIK]: [49938, 436, 37658],
                    [SourceName.WOD]: null
                }
            }),
            254: new LocalCountryModel({
                id: 254,
                populationCount: 5169697,
                sourcesData: {
                    [SourceName.CAC]: [128719, 1497, 121614],
                    [SourceName.CLN]: [128867, 1499, 121890],
                    [SourceName.COA]: [128867, 1499, 121890],
                    [SourceName.CVA]: [128867, 1499, 121890],
                    [SourceName.CVS]: [4341, 18, 1303],
                    [SourceName.GOO]: [128867, 1499, 121890],
                    [SourceName.WIK]: [128867, 1499, 121890],
                    [SourceName.WOD]: [128867, 1499, 121890]
                }
            }),
            255: new LocalCountryModel({
                id: 255,
                populationCount: 222849215,
                sourcesData: {
                    [SourceName.CAC]: [479715, 10105, 435073],
                    [SourceName.CLN]: [484362, 10258, 438974],
                    [SourceName.COA]: [484362, 10258, 438974],
                    [SourceName.CVA]: [484362, 10258, 438974],
                    [SourceName.CVS]: [35788, 770, 9695],
                    [SourceName.GOO]: [484362, 10258, 438974],
                    [SourceName.WIK]: [484362, 10258, 438974],
                    [SourceName.WOD]: null
                }
            }),
            256: new LocalCountryModel({
                id: 256,
                populationCount: 18094,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            257: new LocalCountryModel({
                id: 257,
                populationCount: 5155308,
                sourcesData: {
                    [SourceName.CAC]: [136736, 1371, 115127],
                    [SourceName.CLN]: [140287, 1446, 120403],
                    [SourceName.COA]: [139223, 1418, 118926],
                    [SourceName.CVA]: [140287, 1446, 120403],
                    [SourceName.CVS]: [375, 2, 310],
                    [SourceName.GOO]: [140287, 1446, 120403],
                    [SourceName.WIK]: [139223, 1418, 118926],
                    [SourceName.WOD]: null
                }
            }),
            258: new LocalCountryModel({
                id: 258,
                populationCount: 20,
                sources: null
            }),
            259: new LocalCountryModel({
                id: 259,
                populationCount: 4345468,
                sourcesData: {
                    [SourceName.CAC]: [242744, 3975, 192601],
                    [SourceName.CLN]: [249733, 4064, 197928],
                    [SourceName.COA]: [249733, 4064, 197928],
                    [SourceName.CVA]: [249733, 4064, 197928],
                    [SourceName.CVS]: [9118, 260, 6080],
                    [SourceName.GOO]: [249733, 4064, 197928],
                    [SourceName.WIK]: [249733, 4064, 197928],
                    [SourceName.WOD]: [249733, 4064, 197928]
                }
            }),
            260: new LocalCountryModel({
                id: 260,
                populationCount: 3347100,
                sources: null
            }),
            261: new LocalCountryModel({
                id: 261,
                populationCount: 9024778,
                sourcesData: {
                    [SourceName.CAC]: [780, 9, 661],
                    [SourceName.CLN]: [780, 9, 661],
                    [SourceName.COA]: [780, 9, 661],
                    [SourceName.CVA]: [780, 9, 661],
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: [780, 9, 661],
                    [SourceName.WIK]: [681, 7, 588],
                    [SourceName.WOD]: null
                }
            }),
            262: new LocalCountryModel({
                id: 262,
                populationCount: 7172416,
                sourcesData: {
                    [SourceName.CAC]: [106958, 2242, 81034],
                    [SourceName.CLN]: [108349, 2262, 81977],
                    [SourceName.COA]: [108349, 2262, 81977],
                    [SourceName.CVA]: [108349, 2262, 81977],
                    [SourceName.CVS]: [754, 11, 184],
                    [SourceName.GOO]: [108349, 2262, 81977],
                    [SourceName.WIK]: [108349, 2262, 81977],
                    [SourceName.WOD]: null
                }
            }),
            263: new LocalCountryModel({
                id: 263,
                populationCount: 33165406,
                sourcesData: {
                    [SourceName.CAC]: [1012614, 37621, 951318],
                    [SourceName.CLN]: [1017199, 37724, 954982],
                    [SourceName.COA]: [1015137, 37680, 951318],
                    [SourceName.CVA]: [1017199, 37724, 954982],
                    [SourceName.CVS]: [80604, 2267, 25151],
                    [SourceName.GOO]: [1017199, 37724, 954982],
                    [SourceName.WIK]: [1017199, 37724, 954982],
                    [SourceName.WOD]: [1017199, 37724, 954982]
                }
            }),
            264: new LocalCountryModel({
                id: 264,
                populationCount: 0,
                sources: null
            }),
            265: new LocalCountryModel({
                id: 265,
                populationCount: 110255506,
                sourcesData: {
                    [SourceName.CAC]: [472532, 9230, 439509],
                    [SourceName.CLN]: [476916, 9253, 439942],
                    [SourceName.COA]: [475820, 9248, 439895],
                    [SourceName.CVA]: [476916, 9253, 439942],
                    [SourceName.CVS]: [11876, 790, 2337],
                    [SourceName.GOO]: [476916, 9253, 439942],
                    [SourceName.WIK]: [476916, 9253, 439942],
                    [SourceName.WOD]: [476916, 9253, 439942]
                }
            }),
            266: new LocalCountryModel({
                id: 266,
                populationCount: 50,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            267: new LocalCountryModel({
                id: 267,
                populationCount: 37824252,
                sourcesData: {
                    [SourceName.CAC]: [1281414, 28019, 1025889],
                    [SourceName.CLN]: [1312780, 29058, 1055436],
                    [SourceName.COA]: [1305774, 28956, 1046281],
                    [SourceName.CVA]: [1312780, 29058, 1055436],
                    [SourceName.CVS]: [17615, 883, 6696],
                    [SourceName.GOO]: [1312780, 29058, 1055436],
                    [SourceName.WIK]: [1312780, 29058, 1055436],
                    [SourceName.WOD]: [1312780, 29058, 1055436]
                }
            }),
            268: new LocalCountryModel({
                id: 268,
                populationCount: 10182193,
                sourcesData: {
                    [SourceName.CAC]: [406051, 6830, 331016],
                    [SourceName.CLN]: [420629, 6972, 338668],
                    [SourceName.COA]: [420629, 6972, 338668],
                    [SourceName.CVA]: [420629, 6972, 338668],
                    [SourceName.CVS]: [28319, 1184, 3198],
                    [SourceName.GOO]: [420629, 6972, 338668],
                    [SourceName.WIK]: [420629, 6972, 338668],
                    [SourceName.WOD]: [420629, 6972, 338668]
                }
            }),
            269: new LocalCountryModel({
                id: 269,
                populationCount: 2833989,
                sourcesData: {
                    [SourceName.CAC]: [39, 2, 1],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: [39, 2, 1],
                    [SourceName.GOO]: [134478, 1526, 0],
                    [SourceName.WIK]: [72327, 1521, null],
                    [SourceName.WOD]: null
                }
            }),
            270: new LocalCountryModel({
                id: 270,
                populationCount: 4285000,
                sources: null
            }),
            271: new LocalCountryModel({
                id: 271,
                populationCount: 2907082,
                sourcesData: {
                    [SourceName.CAC]: [143621, 245, 141300],
                    [SourceName.CLN]: [144240, 245, 141680],
                    [SourceName.COA]: [144042, 245, 141556],
                    [SourceName.CVA]: [144240, 245, 141680],
                    [SourceName.CVS]: [28272, 14, 3356],
                    [SourceName.GOO]: [144240, 245, 141680],
                    [SourceName.WIK]: [144240, 245, 141680],
                    [SourceName.WOD]: [144240, 245, 141680]
                }
            }),
            272: new LocalCountryModel({
                id: 272,
                populationCount: 50,
                sources: null
            }),
            273: new LocalCountryModel({
                id: 273,
                populationCount: 1218107,
                sources: null
            }),
            274: new LocalCountryModel({
                id: 274,
                populationCount: 38379,
                sources: null
            }),
            275: new LocalCountryModel({
                id: 275,
                populationCount: 2000000,
                sources: null
            }),
            276: new LocalCountryModel({
                id: 276,
                populationCount: 19182963,
                sourcesData: {
                    [SourceName.CAC]: [627941, 15596, 554056],
                    [SourceName.CLN]: [637395, 15919, 571333],
                    [SourceName.COA]: [636201, 15841, 566365],
                    [SourceName.CVA]: [637395, 15919, 571333],
                    [SourceName.CVS]: [16247, 1053, 9053],
                    [SourceName.GOO]: [637395, 15919, 571333],
                    [SourceName.WIK]: [637395, 15919, 571333],
                    [SourceName.WOD]: [637395, 15919, 571333]
                }
            }),
            277: new LocalCountryModel({
                id: 277,
                populationCount: 1370,
                sources: null
            }),
            278: new LocalCountryModel({
                id: 278,
                populationCount: 1594,
                sources: null
            }),
            279: new LocalCountryModel({
                id: 279,
                populationCount: 145957321,
                sourcesData: {
                    [SourceName.CAC]: [3131550, 56426, 2525418],
                    [SourceName.CLN]: [3212637, 58002, 2599035],
                    [SourceName.COA]: [3153960, 56798, 2553467],
                    [SourceName.CVA]: [3212637, 58002, 2599035],
                    [SourceName.CVS]: [252245, 2305, 53530],
                    [SourceName.GOO]: [3212637, 58002, 2599035],
                    [SourceName.WIK]: [3212637, 58002, 2599035],
                    [SourceName.WOD]: [3212637, 58002, 2599035]
                }
            }),
            280: new LocalCountryModel({
                id: 280,
                populationCount: 13098383,
                sourcesData: {
                    [SourceName.CAC]: [8250, 86, 6369],
                    [SourceName.CLN]: [8460, 94, 6598],
                    [SourceName.COA]: [8460, 94, 6598],
                    [SourceName.CVA]: [8460, 94, 6598],
                    [SourceName.CVS]: [287, 0, 168],
                    [SourceName.GOO]: [8460, 94, 6598],
                    [SourceName.WIK]: [8383, 92, 6542],
                    [SourceName.WOD]: null
                }
            }),
            281: new LocalCountryModel({
                id: 281,
                populationCount: 898315,
                sourcesData: {
                    [SourceName.CAC]: [8972, 42, 8496],
                    [SourceName.CLN]: [9037, 42, 8706],
                    [SourceName.COA]: null,
                    [SourceName.CVA]: [9037, 42, 8706],
                    [SourceName.CVS]: [440, 0, 354],
                    [SourceName.GOO]: [9037, 42, 8706],
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            282: new LocalCountryModel({
                id: 282,
                populationCount: 1915,
                sourcesData: {
                    [SourceName.CAC]: null,
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: [5, 0, 5],
                    [SourceName.WOD]: null
                }
            }),
            283: new LocalCountryModel({
                id: 283,
                populationCount: 502585,
                sources: null
            }),
            284: new LocalCountryModel({
                id: 284,
                populationCount: 9877,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: [190, 1, 172],
                    [SourceName.COA]: null,
                    [SourceName.CVA]: [190, 1, 172],
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: [190, 1, 172],
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            285: new LocalCountryModel({
                id: 285,
                populationCount: 5633,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            286: new LocalCountryModel({
                id: 286,
                populationCount: 53199,
                sourcesData: {
                    [SourceName.CAC]: [32, 0, 29],
                    [SourceName.CLN]: [32, 0, 29],
                    [SourceName.COA]: [32, 0, 29],
                    [SourceName.CVA]: [32, 0, 29],
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: [32, 0, 29],
                    [SourceName.WIK]: [32, 0, 29],
                    [SourceName.WOD]: null
                }
            }),
            287: new LocalCountryModel({
                id: 287,
                populationCount: 183961,
                sourcesData: {
                    [SourceName.CAC]: [340, 5, 278],
                    [SourceName.CLN]: [353, 5, 289],
                    [SourceName.COA]: [353, 5, 289],
                    [SourceName.CVA]: [353, 5, 289],
                    [SourceName.CVS]: [18, 0, 18],
                    [SourceName.GOO]: [353, 5, 289],
                    [SourceName.WIK]: [353, 5, 289],
                    [SourceName.WOD]: null
                }
            }),
            288: new LocalCountryModel({
                id: 288,
                populationCount: 38666,
                sourcesData: {
                    [SourceName.CAC]: [961, 12, 855],
                    [SourceName.CLN]: [995, 12, 855],
                    [SourceName.COA]: null,
                    [SourceName.CVA]: [995, 12, 855],
                    [SourceName.CVS]: [39, 3, 30],
                    [SourceName.GOO]: [995, 12, 855],
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            289: new LocalCountryModel({
                id: 289,
                populationCount: 5794,
                sourcesData: {
                    [SourceName.CAC]: [16, 0, 14],
                    [SourceName.CLN]: [16, 0, 14],
                    [SourceName.COA]: null,
                    [SourceName.CVA]: [16, 0, 14],
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: [16, 0, 14],
                    [SourceName.WIK]: [16, 0, 12],
                    [SourceName.WOD]: null
                }
            }),
            290: new LocalCountryModel({
                id: 290,
                populationCount: 110940,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: [121, 0, 98],
                    [SourceName.COA]: [121, 0, 98],
                    [SourceName.CVA]: [121, 0, 98],
                    [SourceName.CVS]: [17, 0, 12],
                    [SourceName.GOO]: [121, 0, 98],
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            291: new LocalCountryModel({
                id: 291,
                populationCount: 964330,
                sources: null
            }),
            292: new LocalCountryModel({
                id: 292,
                populationCount: 199081,
                sourcesData: {
                    [SourceName.CAC]: [2, 0, 2],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: [2, 0, 2],
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            293: new LocalCountryModel({
                id: 293,
                populationCount: 33931,
                sourcesData: {
                    [SourceName.CAC]: [2384, 59, 2035],
                    [SourceName.CLN]: [2428, 59, 2042],
                    [SourceName.COA]: [2428, 59, 2042],
                    [SourceName.CVA]: [2428, 59, 2042],
                    [SourceName.CVS]: [648, 41, 172],
                    [SourceName.GOO]: [2428, 59, 2042],
                    [SourceName.WIK]: [2428, 59, 2042],
                    [SourceName.WOD]: null
                }
            }),
            294: new LocalCountryModel({
                id: 294,
                populationCount: 1651793,
                sources: null
            }),
            295: new LocalCountryModel({
                id: 295,
                populationCount: 35072663,
                sourcesData: {
                    [SourceName.CAC]: [362601, 6214, 353682],
                    [SourceName.CLN]: [362878, 6230, 354081],
                    [SourceName.COA]: [362878, 6230, 354081],
                    [SourceName.CVA]: [362878, 6230, 354081],
                    [SourceName.CVS]: [46869, 283, 19051],
                    [SourceName.GOO]: [362878, 6230, 354081],
                    [SourceName.WIK]: [362878, 6230, 354081],
                    [SourceName.WOD]: [362878, 6230, 354081]
                }
            }),
            296: new LocalCountryModel({
                id: 296,
                populationCount: 5463300,
                sources: null
            }),
            380: new LocalCountryModel({
                id: 380,
                populationCount: 0,
                sources: null
            }),
            297: new LocalCountryModel({
                id: 297,
                populationCount: 16947323,
                sourcesData: {
                    [SourceName.CAC]: [18945, 402, 17201],
                    [SourceName.CLN]: [19511, 416, 17433],
                    [SourceName.COA]: [19364, 410, 17375],
                    [SourceName.CVA]: [19511, 416, 17433],
                    [SourceName.CVS]: [2189, 23, 842],
                    [SourceName.GOO]: [19511, 416, 17433],
                    [SourceName.WIK]: [19364, 410, 17375],
                    [SourceName.WOD]: null
                }
            }),
            298: new LocalCountryModel({
                id: 298,
                populationCount: 8721353,
                sourcesData: {
                    [SourceName.CAC]: [334991, 3163, 31536],
                    [SourceName.CLN]: [339997, 3250, 31536],
                    [SourceName.COA]: [339997, 3250, 0],
                    [SourceName.CVA]: [339997, 3250, 31536],
                    [SourceName.CVS]: [10374, 224, 4084],
                    [SourceName.GOO]: [339997, 3250, 31536],
                    [SourceName.WIK]: [339997, 3250, null],
                    [SourceName.WOD]: [339997, 3250, 31536]
                }
            }),
            299: new LocalCountryModel({
                id: 299,
                populationCount: 0,
                sources: null
            }),
            300: new LocalCountryModel({
                id: 300,
                populationCount: 98514,
                sourcesData: {
                    [SourceName.CAC]: [256, 0, 212],
                    [SourceName.CLN]: [275, 0, 214],
                    [SourceName.COA]: [275, 0, 214],
                    [SourceName.CVA]: [275, 0, 214],
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: [275, 0, 214],
                    [SourceName.WIK]: [202, 0, 184],
                    [SourceName.WOD]: null
                }
            }),
            301: new LocalCountryModel({
                id: 301,
                populationCount: 5824432,
                sources: null
            }),
            302: new LocalCountryModel({
                id: 302,
                populationCount: 4969147,
                sources: null
            }),
            303: new LocalCountryModel({
                id: 303,
                populationCount: 8051400,
                sourcesData: {
                    [SourceName.CAC]: [2583, 76, 1891],
                    [SourceName.CLN]: [2635, 76, 1906],
                    [SourceName.COA]: [2635, 76, 1906],
                    [SourceName.CVA]: [2635, 76, 1906],
                    [SourceName.CVS]: [408, 26, 97],
                    [SourceName.GOO]: [2635, 76, 1906],
                    [SourceName.WIK]: [2635, 76, 1906],
                    [SourceName.WOD]: null
                }
            }),
            304: new LocalCountryModel({
                id: 304,
                populationCount: 5872867,
                sourcesData: {
                    [SourceName.CAC]: [58569, 29, 58411],
                    [SourceName.CLN]: [58662, 29, 58459],
                    [SourceName.COA]: [58629, 29, 58449],
                    [SourceName.CVA]: [58662, 29, 58459],
                    [SourceName.CVS]: [26098, 21, 5973],
                    [SourceName.GOO]: [58662, 29, 58459],
                    [SourceName.WIK]: [58629, 29, 58449],
                    [SourceName.WOD]: null
                }
            }),
            305: new LocalCountryModel({
                id: 305,
                populationCount: 3138,
                sourcesData: {
                    [SourceName.CAC]: null,
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: [18, 0, 18],
                    [SourceName.WOD]: null
                }
            }),
            306: new LocalCountryModel({
                id: 306,
                populationCount: 42876,
                sourcesData: {
                    [SourceName.CAC]: [1434, 27, 1320],
                    [SourceName.CLN]: [1458, 27, 1342],
                    [SourceName.COA]: null,
                    [SourceName.CVA]: [1458, 27, 1342],
                    [SourceName.CVS]: [76, 15, 46],
                    [SourceName.GOO]: [1458, 27, 1342],
                    [SourceName.WIK]: [1458, 27, 1342],
                    [SourceName.WOD]: null
                }
            }),
            307: new LocalCountryModel({
                id: 307,
                populationCount: 5460643,
                sourcesData: {
                    [SourceName.CAC]: [173228, 2065, 124427],
                    [SourceName.CLN]: [186244, 2250, 128285],
                    [SourceName.COA]: [184508, 2250, 127190],
                    [SourceName.CVA]: [186244, 2250, 128285],
                    [SourceName.CVS]: [1477, 27, 1112],
                    [SourceName.GOO]: [186244, 2250, 128285],
                    [SourceName.WIK]: [184508, 2250, 127190],
                    [SourceName.WOD]: null
                }
            }),
            308: new LocalCountryModel({
                id: 308,
                populationCount: 2078938,
                sourcesData: {
                    [SourceName.CAC]: [119740, 2665, 97766],
                    [SourceName.CLN]: [123950, 2728, 100868],
                    [SourceName.COA]: [123950, 2728, 100868],
                    [SourceName.CVA]: [123950, 2728, 100868],
                    [SourceName.CVS]: [1464, 103, 267],
                    [SourceName.GOO]: [124165, 2774, 6298],
                    [SourceName.WIK]: [123950, 2728, null],
                    [SourceName.WOD]: [123950, 2728, 100868]
                }
            }),
            309: new LocalCountryModel({
                id: 309,
                populationCount: 694726,
                sourcesData: {
                    [SourceName.CAC]: [17, 0, 10],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: [17, 0, 10],
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            310: new LocalCountryModel({
                id: 310,
                populationCount: 16098954,
                sourcesData: {
                    [SourceName.CAC]: [4714, 130, 3612],
                    [SourceName.CLN]: [4714, 130, 3612],
                    [SourceName.COA]: [4714, 130, 3612],
                    [SourceName.CVA]: [4714, 130, 3612],
                    [SourceName.CVS]: [1284, 53, 135],
                    [SourceName.GOO]: [4714, 130, 3612],
                    [SourceName.WIK]: [4714, 130, 3605],
                    [SourceName.WOD]: null
                }
            }),
            311: new LocalCountryModel({
                id: 311,
                populationCount: 3508180,
                sourcesData: {
                    [SourceName.CAC]: null,
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: [1354, 47, 1200],
                    [SourceName.WOD]: null
                }
            }),
            312: new LocalCountryModel({
                id: 312,
                populationCount: 59651410,
                sourcesData: {
                    [SourceName.CAC]: [1039161, 28033, 867597],
                    [SourceName.CLN]: [1073887, 28887, 887701],
                    [SourceName.COA]: [1073887, 28887, 887701],
                    [SourceName.CVA]: [1073887, 28887, 887701],
                    [SourceName.CVS]: [12739, 238, 5676],
                    [SourceName.GOO]: [1073887, 28887, 887701],
                    [SourceName.WIK]: [1073887, 28887, 887701],
                    [SourceName.WOD]: [1073887, 28887, 887701]
                }
            }),
            313: new LocalCountryModel({
                id: 313,
                populationCount: 306510,
                sources: null
            }),
            314: new LocalCountryModel({
                id: 314,
                populationCount: 30,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            315: new LocalCountryModel({
                id: 315,
                populationCount: 51296216,
                sourcesData: {
                    [SourceName.CAC]: [60740, 900, 42271],
                    [SourceName.CLN]: [62593, 942, 43578],
                    [SourceName.COA]: [62593, 942, 43578],
                    [SourceName.CVA]: [62593, 942, 43578],
                    [SourceName.CVS]: [11018, 260, 9821],
                    [SourceName.GOO]: [62593, 942, 43578],
                    [SourceName.WIK]: [62593, 942, 43578],
                    [SourceName.WOD]: null
                }
            }),
            381: new LocalCountryModel({
                id: 381,
                populationCount: 0,
                sources: null
            }),
            316: new LocalCountryModel({
                id: 316,
                populationCount: 53532,
                sourcesData: {
                    [SourceName.CAC]: null,
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: [2163, 39, 1167],
                    [SourceName.WOD]: null
                }
            }),
            379: new LocalCountryModel({
                id: 379,
                populationCount: 500,
                sources: null
            }),
            317: new LocalCountryModel({
                id: 317,
                populationCount: 11266140,
                sourcesData: {
                    [SourceName.CAC]: [3540, 63, 3131],
                    [SourceName.CLN]: [3558, 63, 3131],
                    [SourceName.COA]: [3558, 63, 3131],
                    [SourceName.CVA]: [3558, 63, 3131],
                    [SourceName.CVS]: [203, 0, 3],
                    [SourceName.GOO]: [3558, 63, 3131],
                    [SourceName.WIK]: [3540, 63, 3131],
                    [SourceName.WOD]: null
                }
            }),
            318: new LocalCountryModel({
                id: 318,
                populationCount: 46752943,
                sourcesData: {
                    [SourceName.CAC]: [1921115, 50689, 0],
                    [SourceName.CLN]: [1936718, 50837, 0],
                    [SourceName.COA]: [1928265, 50837, 150376],
                    [SourceName.CVA]: [1936718, 50837, null],
                    [SourceName.CVS]: [272646, 27321, 186480],
                    [SourceName.GOO]: [1928265, 50837, 150376],
                    [SourceName.WIK]: [1928265, 50837, null],
                    [SourceName.WOD]: [1936718, 50837, null]
                }
            }),
            319: new LocalCountryModel({
                id: 319,
                populationCount: 21454462,
                sourcesData: {
                    [SourceName.CAC]: [42702, 199, 34623],
                    [SourceName.CLN]: [43856, 208, 36155],
                    [SourceName.COA]: [43856, 208, 36155],
                    [SourceName.CVA]: [43856, 208, 36155],
                    [SourceName.CVS]: [925, 9, 445],
                    [SourceName.GOO]: [43856, 208, 36155],
                    [SourceName.WIK]: [43856, 208, 36155],
                    [SourceName.WOD]: null
                }
            }),
            320: new LocalCountryModel({
                id: 320,
                populationCount: 44321626,
                sourcesData: {
                    [SourceName.CAC]: [23316, 1468, 13524],
                    [SourceName.CLN]: [23316, 1468, 13524],
                    [SourceName.COA]: [23316, 1468, 13524],
                    [SourceName.CVA]: [23316, 1468, 13524],
                    [SourceName.CVS]: [1818, 90, 198],
                    [SourceName.GOO]: [23316, 1468, 13524],
                    [SourceName.WIK]: [23316, 1468, 13524],
                    [SourceName.WOD]: null
                }
            }),
            321: new LocalCountryModel({
                id: 321,
                populationCount: 588968,
                sourcesData: {
                    [SourceName.CAC]: [6181, 121, 5694],
                    [SourceName.CLN]: [6277, 123, 5771],
                    [SourceName.COA]: [6277, 123, 5771],
                    [SourceName.CVA]: [6277, 123, 5771],
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: [6277, 123, 5771],
                    [SourceName.WIK]: [6277, 123, 5771],
                    [SourceName.WOD]: [6277, 123, 5771]
                }
            }),
            322: new LocalCountryModel({
                id: 322,
                populationCount: 2939,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            323: new LocalCountryModel({
                id: 323,
                populationCount: 10128131,
                sourcesData: {
                    [SourceName.CAC]: [437379, 8727, 0],
                    [SourceName.CLN]: [437379, 8727, 0],
                    [SourceName.COA]: [437379, 8727, 0],
                    [SourceName.CVA]: [437379, 8727, null],
                    [SourceName.CVS]: [28582, 3529, 4971],
                    [SourceName.GOO]: [437379, 8727, 0],
                    [SourceName.WIK]: [437379, 8727, null],
                    [SourceName.WOD]: [437379, 8727, null]
                }
            }),
            324: new LocalCountryModel({
                id: 324,
                populationCount: 8684489,
                sourcesData: {
                    [SourceName.CAC]: [447905, 7594, 317600],
                    [SourceName.CLN]: [452296, 7704, 317600],
                    [SourceName.COA]: [452296, 7704, 317600],
                    [SourceName.CVA]: [452296, 7704, 317600],
                    [SourceName.CVS]: [30463, 1872, 27100],
                    [SourceName.GOO]: [452296, 7725, 317600],
                    [SourceName.WIK]: [452296, 7082, 317600],
                    [SourceName.WOD]: [452296, 7704, 317600]
                }
            }),
            325: new LocalCountryModel({
                id: 325,
                populationCount: 17676857,
                sourcesData: {
                    [SourceName.CAC]: [11344, 704, 5296],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: [11799, 734, 5615],
                    [SourceName.CVA]: [11526, 717, 5420],
                    [SourceName.CVS]: [48, 3, 29],
                    [SourceName.GOO]: [11526, 717, 5420],
                    [SourceName.WIK]: [11434, 711, 5350],
                    [SourceName.WOD]: null
                }
            }),
            326: new LocalCountryModel({
                id: 326,
                populationCount: 221161,
                sourcesData: {
                    [SourceName.CAC]: [1014, 17, 966],
                    [SourceName.CLN]: [1022, 17, 973],
                    [SourceName.COA]: [1022, 17, 973],
                    [SourceName.CVA]: [1022, 17, 973],
                    [SourceName.CVS]: [235, 7, 1],
                    [SourceName.GOO]: [1022, 17, 973],
                    [SourceName.WIK]: [1022, 17, 973],
                    [SourceName.WOD]: null
                }
            }),
            327: new LocalCountryModel({
                id: 327,
                populationCount: 23836464,
                sourcesData: {
                    [SourceName.CAC]: [797, 7, 666],
                    [SourceName.CLN]: [808, 7, 686],
                    [SourceName.COA]: [802, 7, 682],
                    [SourceName.CVA]: [808, 7, 686],
                    [SourceName.CVS]: [440, 7, 383],
                    [SourceName.GOO]: [808, 7, 686],
                    [SourceName.WIK]: [808, 7, 686],
                    [SourceName.WOD]: null
                }
            }),
            328: new LocalCountryModel({
                id: 328,
                populationCount: 9634421,
                sourcesData: {
                    [SourceName.CAC]: [13296, 90, 12799],
                    [SourceName.CLN]: [13296, 90, 12894],
                    [SourceName.COA]: [13296, 90, 0],
                    [SourceName.CVA]: [13296, 90, 12894],
                    [SourceName.CVS]: [907, 29, 12894],
                    [SourceName.GOO]: [13296, 90, 12894],
                    [SourceName.WIK]: [13071, 89, 12536],
                    [SourceName.WOD]: null
                }
            }),
            329: new LocalCountryModel({
                id: 329,
                populationCount: 60522941,
                sourcesData: {
                    [SourceName.CAC]: [509, 21, 183],
                    [SourceName.CLN]: [509, 21, 183],
                    [SourceName.COA]: null,
                    [SourceName.CVA]: [509, 21, 183],
                    [SourceName.CVS]: [509, 21, 183],
                    [SourceName.GOO]: [509, 21, 183],
                    [SourceName.WIK]: [null, null, null],
                    [SourceName.WOD]: null
                }
            }),
            330: new LocalCountryModel({
                id: 330,
                populationCount: 3894284,
                sources: null
            }),
            331: new LocalCountryModel({
                id: 331,
                populationCount: 21362,
                sources: null
            }),
            332: new LocalCountryModel({
                id: 332,
                populationCount: 69878900,
                sourcesData: {
                    [SourceName.CAC]: [6690, 61, 4212],
                    [SourceName.CLN]: [7379, 64, 4299],
                    [SourceName.COA]: [7379, 64, 4299],
                    [SourceName.CVA]: [7379, 64, 4299],
                    [SourceName.CVS]: [3018, 56, 2850],
                    [SourceName.GOO]: [7379, 64, 4299],
                    [SourceName.WIK]: [7379, 64, 4299],
                    [SourceName.WOD]: null
                }
            }),
            333: new LocalCountryModel({
                id: 333,
                populationCount: 3180000,
                sources: null
            }),
            334: new LocalCountryModel({
                id: 334,
                populationCount: 1329958,
                sourcesData: {
                    [SourceName.CAC]: [44, 0, 32],
                    [SourceName.CLN]: [44, 0, 32],
                    [SourceName.COA]: [44, 0, 32],
                    [SourceName.CVA]: [44, 0, 32],
                    [SourceName.CVS]: [24, 0, 21],
                    [SourceName.GOO]: [44, 0, 32],
                    [SourceName.WIK]: [30, 0, 30],
                    [SourceName.WOD]: null
                }
            }),
            335: new LocalCountryModel({
                id: 335,
                populationCount: 8368826,
                sourcesData: {
                    [SourceName.CAC]: [3611, 68, 3384],
                    [SourceName.CLN]: [3662, 68, 3443],
                    [SourceName.COA]: [3662, 68, 3443],
                    [SourceName.CVA]: [3662, 68, 3443],
                    [SourceName.CVS]: [238, 11, 96],
                    [SourceName.GOO]: [3662, 68, 3443],
                    [SourceName.WIK]: [3662, 68, 3443],
                    [SourceName.WOD]: null
                }
            }),
            336: new LocalCountryModel({
                id: 336,
                populationCount: 1357,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            337: new LocalCountryModel({
                id: 337,
                populationCount: 106196,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: [0, 0, 0],
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            338: new LocalCountryModel({
                id: 338,
                populationCount: 469000,
                sources: null
            }),
            339: new LocalCountryModel({
                id: 339,
                populationCount: 1072276,
                sources: null
            }),
            340: new LocalCountryModel({
                id: 340,
                populationCount: 1401490,
                sourcesData: {
                    [SourceName.CAC]: [7132, 126, 6628],
                    [SourceName.CLN]: [7158, 127, 6671],
                    [SourceName.COA]: [7158, 127, 6671],
                    [SourceName.CVA]: [7158, 127, 6671],
                    [SourceName.CVS]: [116, 8, 107],
                    [SourceName.GOO]: [7158, 127, 6671],
                    [SourceName.WIK]: [7158, 127, 6671],
                    [SourceName.WOD]: null
                }
            }),
            341: new LocalCountryModel({
                id: 341,
                populationCount: 11872847,
                sourcesData: {
                    [SourceName.CAC]: [137216, 4620, 104980],
                    [SourceName.CLN]: [140557, 4730, 105499],
                    [SourceName.COA]: [140557, 4730, 105499],
                    [SourceName.CVA]: [140557, 4730, 105499],
                    [SourceName.CVS]: [1032, 45, 770],
                    [SourceName.GOO]: [140557, 4730, 105499],
                    [SourceName.WIK]: [140557, 4730, 105499],
                    [SourceName.WOD]: null
                }
            }),
            342: new LocalCountryModel({
                id: 342,
                populationCount: 84744024,
                sourcesData: {
                    [SourceName.CAC]: [2194272, 20642, 2078629],
                    [SourceName.CLN]: [2220855, 21093, 2114760],
                    [SourceName.COA]: [2220855, 21093, 2114760],
                    [SourceName.CVA]: [2220855, 21093, 2114760],
                    [SourceName.CVS]: [144749, 4007, 104030],
                    [SourceName.GOO]: [2220855, 21093, 2114760],
                    [SourceName.WIK]: [2220855, 21093, 2114760],
                    [SourceName.WOD]: [2220855, 21093, 2114760]
                }
            }),
            343: new LocalCountryModel({
                id: 343,
                populationCount: 6071412,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: [0, 0, 0],
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            344: new LocalCountryModel({
                id: 344,
                populationCount: 38717,
                sourcesData: {
                    [SourceName.CAC]: [874, 6, 764],
                    [SourceName.CLN]: [893, 6, 783],
                    [SourceName.COA]: null,
                    [SourceName.CVA]: [893, 6, 783],
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: [908, 6, 783],
                    [SourceName.WIK]: [908, 6, 783],
                    [SourceName.WOD]: null
                }
            }),
            345: new LocalCountryModel({
                id: 345,
                populationCount: 321722,
                sources: null
            }),
            346: new LocalCountryModel({
                id: 346,
                populationCount: 11792,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            347: new LocalCountryModel({
                id: 347,
                populationCount: 1513044,
                sources: null
            }),
            348: new LocalCountryModel({
                id: 348,
                populationCount: 46392576,
                sourcesData: {
                    [SourceName.CAC]: [34677, 251, 11579],
                    [SourceName.CLN]: [35511, 265, 11878],
                    [SourceName.COA]: [35511, 265, 11878],
                    [SourceName.CVA]: [35511, 265, 11878],
                    [SourceName.CVS]: [160, 0, 63],
                    [SourceName.GOO]: [35511, 265, 11878],
                    [SourceName.WIK]: [35511, 265, 11878],
                    [SourceName.WOD]: null
                }
            }),
            349: new LocalCountryModel({
                id: 349,
                populationCount: 43617631,
                sourcesData: {
                    [SourceName.CAC]: [1045348, 18324, 698190],
                    [SourceName.CLN]: [1069517, 18731, 722615],
                    [SourceName.COA]: [1096855, 19437, 746680],
                    [SourceName.CVA]: [1069517, 18731, 722615],
                    [SourceName.CVS]: [16847, 456, 4143],
                    [SourceName.GOO]: [1069517, 18731, 722615],
                    [SourceName.WIK]: [1069517, 18731, 722615],
                    [SourceName.WOD]: [1069517, 18731, 722615]
                }
            }),
            350: new LocalCountryModel({
                id: 350,
                populationCount: 9940625,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: [211641, 674, 188100],
                    [SourceName.COA]: [209678, 671, 186019],
                    [SourceName.CVA]: [211641, 674, 188100],
                    [SourceName.CVS]: [21084, 208, 6930],
                    [SourceName.GOO]: [211641, 674, 188100],
                    [SourceName.WIK]: [209678, 671, 186019],
                    [SourceName.WOD]: null
                }
            }),
            351: new LocalCountryModel({
                id: 351,
                populationCount: 68048027,
                sourcesData: {
                    [SourceName.CAC]: [2432888, 72548, 0],
                    [SourceName.CLN]: [2542065, 74125, 0],
                    [SourceName.COA]: [2549689, 74237, 5679],
                    [SourceName.CVA]: [2542065, 74125, null],
                    [SourceName.CVS]: [233151, 33614, null],
                    [SourceName.GOO]: [2542065, 74125, 0],
                    [SourceName.WIK]: [2542065, 74125, null],
                    [SourceName.WOD]: [2542065, 74125, null]
                }
            }),
            352: new LocalCountryModel({
                id: 352,
                populationCount: 331901165,
                sourcesData: {
                    [SourceName.CAC]: [20216991, 350778, 11998794],
                    [SourceName.CLN]: [20617346, 356445, 12175841],
                    [SourceName.COA]: [20128693, 347788, 0],
                    [SourceName.CVA]: [20617346, 356445, 12175841],
                    [SourceName.CVS]: [1457593, 86912, 318027],
                    [SourceName.GOO]: [20617346, 356445, 12175841],
                    [SourceName.WIK]: [20331785, 350853, 9170094],
                    [SourceName.WOD]: [20617346, 356445, 12175841]
                }
            }),
            353: new LocalCountryModel({
                id: 353,
                populationCount: 300,
                sourcesData: {
                    [SourceName.CAC]: [0, 0, 0],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            354: new LocalCountryModel({
                id: 354,
                populationCount: 3479069,
                sourcesData: {
                    [SourceName.CAC]: [18480, 174, 12996],
                    [SourceName.CLN]: [19753, 193, 13990],
                    [SourceName.COA]: [19753, 193, 13990],
                    [SourceName.CVA]: [19753, 193, 13990],
                    [SourceName.CVS]: [724, 19, 547],
                    [SourceName.GOO]: [19753, 193, 13990],
                    [SourceName.WIK]: [19753, 193, 13990],
                    [SourceName.WOD]: null
                }
            }),
            355: new LocalCountryModel({
                id: 355,
                populationCount: 33686949,
                sourcesData: {
                    [SourceName.CAC]: [76985, 614, 74789],
                    [SourceName.CLN]: [77182, 614, 75244],
                    [SourceName.COA]: [77182, 614, 75244],
                    [SourceName.CVA]: [77182, 614, 75244],
                    [SourceName.CVS]: [2645, 11, 2136],
                    [SourceName.GOO]: [77182, 614, 75244],
                    [SourceName.WIK]: [77126, 614, 75112],
                    [SourceName.WOD]: null
                }
            }),
            356: new LocalCountryModel({
                id: 356,
                populationCount: 310482,
                sourcesData: {
                    [SourceName.CAC]: [1, 0, 1],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: [1, 0, 1],
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            357: new LocalCountryModel({
                id: 357,
                populationCount: 801,
                sourcesData: {
                    [SourceName.CAC]: [27, 0, 15],
                    [SourceName.CLN]: [27, 0, 15],
                    [SourceName.COA]: [27, 0, 15],
                    [SourceName.CVA]: [27, 0, 15],
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: [27, 0, 15],
                    [SourceName.WIK]: [29, 0, 15],
                    [SourceName.WOD]: null
                }
            }),
            358: new LocalCountryModel({
                id: 358,
                displayName: 'Venezuela',
                populationCount: 28456964,
                sourcesData: {
                    [SourceName.CAC]: [113121, 1025, 107203],
                    [SourceName.CLN]: [113884, 1030, 107901],
                    [SourceName.COA]: [113884, 1030, 107901],
                    [SourceName.CVA]: [113884, 1030, 107901],
                    [SourceName.CVS]: [455, 10, 220],
                    [SourceName.GOO]: [113884, 1030, 107901],
                    [SourceName.WIK]: [113558, 1028, 107583],
                    [SourceName.WOD]: null
                }
            }),
            359: new LocalCountryModel({
                id: 359,
                populationCount: 97731856,
                sourcesData: {
                    [SourceName.CAC]: [1456, 35, 1323],
                    [SourceName.CLN]: [1474, 35, 1325],
                    [SourceName.COA]: [1474, 35, 1325],
                    [SourceName.CVA]: [1482, 35, 1335],
                    [SourceName.CVS]: [312, 0, 260],
                    [SourceName.GOO]: [1482, 35, 1335],
                    [SourceName.WIK]: [1482, 35, 1335],
                    [SourceName.WOD]: null
                }
            }),
            360: new LocalCountryModel({
                id: 360,
                populationCount: 30231,
                sourcesData: {
                    [SourceName.CAC]: [86, 1, 74],
                    [SourceName.CLN]: [86, 1, 74],
                    [SourceName.COA]: null,
                    [SourceName.CVA]: [86, 1, 74],
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: [93, 1, 74],
                    [SourceName.WIK]: [72, 1, 70],
                    [SourceName.WOD]: null
                }
            }),
            361: new LocalCountryModel({
                id: 361,
                populationCount: 104258,
                sourcesData: {
                    [SourceName.CAC]: [17, 0, 0],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: [17, 0, 0],
                    [SourceName.GOO]: [2036, 23, 1901],
                    [SourceName.WIK]: [2036, 23, 1901],
                    [SourceName.WOD]: null
                }
            }),
            362: new LocalCountryModel({
                id: 362,
                populationCount: 1931809,
                sources: null
            }),
            363: new LocalCountryModel({
                id: 363,
                populationCount: 558000,
                sources: null
            }),
            364: new LocalCountryModel({
                id: 364,
                populationCount: 100,
                sources: null
            }),
            365: new LocalCountryModel({
                id: 365,
                populationCount: 3153000,
                sources: null
            }),
            366: new LocalCountryModel({
                id: 366,
                populationCount: 11239,
                sourcesData: {
                    [SourceName.CAC]: [4, 0, 1],
                    [SourceName.CLN]: null,
                    [SourceName.COA]: null,
                    [SourceName.CVA]: null,
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: null,
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            367: new LocalCountryModel({
                id: 367,
                populationCount: 3633795,
                sources: null
            }),
            368: new LocalCountryModel({
                id: 368,
                populationCount: 963600,
                sources: null
            }),
            369: new LocalCountryModel({
                id: 369,
                populationCount: 603846,
                sourcesData: {
                    [SourceName.CAC]: [10, 1, 8],
                    [SourceName.CLN]: [10, 1, 8],
                    [SourceName.COA]: [10, 1, 8],
                    [SourceName.CVA]: [10, 1, 8],
                    [SourceName.CVS]: null,
                    [SourceName.GOO]: [0, 0, 0],
                    [SourceName.WIK]: null,
                    [SourceName.WOD]: null
                }
            }),
            370: new LocalCountryModel({
                id: 370,
                populationCount: 24870000,
                sources: null
            }),
            371: new LocalCountryModel({
                id: 371,
                populationCount: 30129640,
                sourcesData: {
                    [SourceName.CAC]: [2097, 610, 1392],
                    [SourceName.CLN]: [2101, 610, 1396],
                    [SourceName.COA]: [2101, 610, 1396],
                    [SourceName.CVA]: [2101, 610, 1396],
                    [SourceName.CVS]: [85, 12, 1],
                    [SourceName.GOO]: [2103, 611, 1396],
                    [SourceName.WIK]: [2436, 660, 1580],
                    [SourceName.WOD]: null
                }
            }),
            372: new LocalCountryModel({
                id: 372,
                populationCount: 3594290,
                sources: null
            }),
            373: new LocalCountryModel({
                id: 373,
                populationCount: 18624059,
                sourcesData: {
                    [SourceName.CAC]: [20462, 386, 18530],
                    [SourceName.CLN]: [20997, 390, 18773],
                    [SourceName.COA]: [20997, 390, 18773],
                    [SourceName.CVA]: [20997, 390, 18773],
                    [SourceName.CVS]: [654, 7, 124],
                    [SourceName.GOO]: [20997, 390, 18773],
                    [SourceName.WIK]: [20997, 390, 18773],
                    [SourceName.WOD]: null
                }
            }),
            374: new LocalCountryModel({
                id: 374,
                populationCount: 1303569,
                sources: null
            }),
            375: new LocalCountryModel({
                id: 375,
                populationCount: 363583,
                sources: null
            }),
            376: new LocalCountryModel({
                id: 376,
                populationCount: 14966040,
                sourcesData: {
                    [SourceName.CAC]: [13625, 360, 11154],
                    [SourceName.CLN]: [14084, 369, 11347],
                    [SourceName.COA]: [14084, 369, 11347],
                    [SourceName.CVA]: [14084, 369, 11347],
                    [SourceName.CVS]: [37, 4, 13],
                    [SourceName.GOO]: [14084, 369, 11347],
                    [SourceName.WIK]: [14084, 369, 11347],
                    [SourceName.WOD]: null
                }
            }),
            377: new LocalCountryModel({
                id: 377,
                populationCount: 12989,
                sourcesData: {
                    [SourceName.CAC]: null,
                    [SourceName.CLN]: [721, 15, 706],
                    [SourceName.COA]: null,
                    [SourceName.CVA]: [721, 15, 706],
                    [SourceName.CVS]: [712, 13, 651],
                    [SourceName.GOO]: [712, 13, 699],
                    [SourceName.WIK]: [3204, 23, 1560],
                    [SourceName.WOD]: null
                }
            })
        };
        this.countriesKeysList = Object.keys(this.countriesList);
    }
}

export default new LocalData();