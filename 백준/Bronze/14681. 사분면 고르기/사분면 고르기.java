import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Integer num1 = sc.nextInt();
        Integer num2 = sc.nextInt();

        int a = num1.compareTo(0);
        int b = num2.compareTo(0);

        if(a == -1 && b == 1){
            System.out.println(2);
        } else if(a == 1 && b == 1){
            System.out.println(1);
        } else if(a == -1 && b == -1){
            System.out.println(3);
        } else {
            System.out.println(4);
        }
    }
}