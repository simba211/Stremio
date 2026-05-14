const manifest = {
    id: "org.koc.vnaddon",
    version: "1.0.0",
    name: "VN Movie Sources",
    description: "Addon cho OPhim / PhimAPI / NguonC",
    resources: ["stream"],
    types: ["movie", "series"],
    idPrefixes: ["tt"],
    catalogs: []
};

const builder = new addonBuilder(manifest);

builder.defineStreamHandler(async () => {
    return {
        streams: [
            {
                title: "VN Source Test",
                url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
            }
        ]
    };
});

serveHTTP(builder.getInterface(), { port: 7000 });

console.log("Addon running");
