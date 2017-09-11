cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-sqlite-2/dist/sqlite-plugin.js",
        "id": "cordova-plugin-sqlite-2.sqlitePlugin",
        "clobbers": [
            "sqlitePlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-sqlite-2": "1.0.4",
    "cordova-plugin-whitelist": "1.2.2"
};
// BOTTOM OF METADATA
});