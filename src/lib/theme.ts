/**
 * Theme constants shared by the no-flash boot script (server-rendered in <body>)
 * and the ThemeToggle client component. Deliberately NOT a client module so the
 * server component can import the string directly.
 *
 * Dark is the default: an untouched profile boots dark, whatever the OS prefers.
 */
export const THEME_KEY = "mcai-theme";

export const THEME_INIT = `(function(){try{
var m=localStorage.getItem("${THEME_KEY}");
if(m!=="light"&&m!=="dark"&&m!=="system")m="dark";
var d=m==="dark"||(m==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches);
var r=document.documentElement;
r.classList.toggle("light",!d);
r.classList.toggle("dark",d);
r.style.colorScheme=d?"dark":"light";
}catch(e){}})();`;
