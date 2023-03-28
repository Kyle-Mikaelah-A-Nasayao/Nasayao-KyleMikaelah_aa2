var odd = 1;

document.write("loop 1 (while):");

while (odd <= 51) {
    document.write(" " + odd);
    if (odd != 51) {
        document.write(",");
    }
    odd += 2;
}