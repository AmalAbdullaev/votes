const Theme = require("../models/theme.model").Theme;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

function createTheme (name) {
    return Theme.create({
        name: name,
        voteYes: 0,
        voteNo: 0
    }).then((res) => {
        return res.dataValues;
    }).catch((err) => {
        return err;
    });
}

function updateThemeYes(id) {
    return Theme.findByPk(id).then((res) => {
        res.dataValues.voteYes = res.dataValues.voteYes + 1;
        return Theme.update(res.dataValues, {
            where : {
                id : {
                    [Op.eq]: id
                }
            }
        }).then(() => {
            return 'OK';
        })
    }).catch((err) => {
        return err;
    }); 
}

function updateThemeNo(id) {
    return Theme.findByPk(id).then((res) => {
        res.dataValues.voteNo = res.dataValues.voteNo + 1;
        return Theme.update(res.dataValues, {
            where : {
                id : {
                    [Op.eq]: id
                }
            }
        }).then(() => {
            return 'OK';
        })
    }).catch((err) => {
        return err;
    }); 
}

function findOneTheme (id) {
    return Theme.findByPk(id).then((res) => {
        return res.dataValues;
    }).catch((err) => {
        return err;
    });  
}

exports.createTheme = createTheme;
exports.findOneTheme = findOneTheme;
exports.updateThemeYes = updateThemeYes;
exports.updateThemeNo = updateThemeNo;