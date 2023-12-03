import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int hours = scanner.nextInt();
        int min = scanner.nextInt();
        int min2 = scanner.nextInt();

        int a = min + min2;

        while( a >= 60) {
            a -= 60;
            hours++;
        }

        if (hours >= 24) {
            hours -= 24;
        }

        System.out.println(hours + " " + a);
    }
}