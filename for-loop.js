var pattern = 1;

document.write("<br> loop 3 (for loop): " + pattern + ",");

for (let i = 1; i >= -10; i--) {
    pattern = pattern*2 + i;
    document.write(" " + pattern);
    if (pattern != 4108) {
        document.write(",");
    }
}