import localFont from "next/font/local";

const nohemiRegular = localFont({
    src: "./Nohemi-Regular.woff2",
    display: "swap",
})

const nohemiVariable = localFont({
    src: "./Nohemi-VF.ttf",
    display: "swap",
});

export { nohemiRegular, nohemiVariable };