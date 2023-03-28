var even = 2;

document.write("<br> loop 2 (do-while):");

do {
    document.write(" " + even);
    if (even != 50) {
        document.write(",");
    }
    even += 2;
} while (even <= 50);