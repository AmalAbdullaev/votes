const transform = require('js-object-transform');

const convertConfig = {

    'id': function(src, dest, srcKey, destKey) {
        return src.id;
    },
    'name': function(src, dest, srcKey, destKey) {
        return src.name;
    },
    'votes': function(src, dest, srcKey, destKey) {
        return {
            'yes' : src.voteYes,
            'no' : src.voteNo
        }
    },
};

function ThemeMapping(theme) {
    let viewData = {};
    viewData = transform(theme, viewData, convertConfig);
    return viewData

}

exports.ThemeMapping = ThemeMapping;