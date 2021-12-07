module.exports = api => {
    api.cache(true);

    return {
        "presets": [
            "@babel/preset-env", {
                targets: {
                    "last 1 version",
                    "> 1%",
                    "maintained node versions",
                    "not dead"
                }
            }
        ],
    }
}
{
    "presets": ["@babel/preset-env"]
}