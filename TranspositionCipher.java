import java.util.Scanner;

public class TranspositionCipher {


    public static String encrypt(String message, int key) {
        StringBuilder encryptedMessage = new StringBuilder();

   
        char[][] grid = new char[key][(int) Math.ceil((double) message.length() / key)];

    
        int row = 0, col = 0;
        for (char c : message.toCharArray()) {
            grid[row][col] = c;
            row = (row + 1) % key;
            if (row == 0) {
                col++;
            }
        }


        for (int i = 0; i < key; i++) {
            for (int j = 0; j < grid[i].length; j++) {
                if (grid[i][j] != '\u0000') {
                    encryptedMessage.append(grid[i][j]);
                }
            }
        }

        return encryptedMessage.toString();
    }


    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
               System.out.print("Enter message to encrypt: ");
        String message = scanner.nextLine();
        
   
        System.out.print("Enter key: ");
        int key = scanner.nextInt();

        String encryptedMessage = encrypt(message, key);
        

        System.out.println("Encrypted message: " + encryptedMessage);
        
        scanner.close();
    }
}
