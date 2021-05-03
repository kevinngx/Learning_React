import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;
import java.util.Scanner;

public class Solution {
    
    public static void main(String args[] ) throws Exception {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT */
        
        Scanner scanner = new Scanner(System.in);
        String line = null;
        
        ArrayList<Order> orderList = new ArrayList<Order>();
        ArrayList<Long> matchedOrderList = new ArrayList<Long>();
        
        // Main loop
        try {
            while (!(line = scanner.nextLine()).isEmpty()){
                // Checks
                // System.out.println("*********************************************");
                // System.out.println("Input: " + line);    
                
                // Process order
                Order newOrder = parseOrder(line);
                matchOrder(newOrder, orderList, matchedOrderList);
            
                // Add to queue if order still has a non-zero size
                if (newOrder.getSize() > 0) 
                    orderList.add(newOrder);
                 else 
                    matchedOrderList.add(newOrder.getOrderId());
                
                // Print output
                // Order of list? - assume its ordered by resolution as opposed to by time they were entered
                // Collections.sort(matchedOrderList); - We can use this assuming IDs are ascending
                System.out.println(matchedOrderList.size() + " matches: " + getOutput(matchedOrderList));
            }   
        } 
        catch (NoSuchElementException e) {
            // System.out.println("No more inputs");
        }  
    }
    
    static String getOutput(ArrayList<Long> matchedOrderList) {
        // This method builds the output as comma separated values
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < matchedOrderList.size(); i++) {
            sb.append(matchedOrderList.get(i));
            if (i != matchedOrderList.size() - 1) 
                sb.append(",");
        }
        return sb.toString();
    }
    
    static void matchOrder(Order newOrder, ArrayList<Order> orderList, ArrayList<Long> matchedOrderList) {
        // This method loops through the queue of orders and finds matching Buy & Sell Orders
        
        for (int i = 0; i < orderList.size(); i++) {    
            // Break from loop if size has reached 0
            if (newOrder.getSize() == 0) break;
            
            Order listOrder = orderList.get(i);
            
            // Check if Buy vs Sell matches
            if (listOrder.getCustomerSide() != newOrder.getCustomerSide()) {
                if (listOrder.getProduct().equals(newOrder.getProduct())) 
                    processOrder(newOrder, listOrder);
                
                // remove() if equals to 0 and add to new list
                if (listOrder.getSize() == 0) {
                    orderList.remove(i);
                    matchedOrderList.add(listOrder.getOrderId());
                    i--;
                }
            }
        }
    }
    
    static void processOrder(Order newOrder, Order listOrder) {
        // The sale amount will be the lower of the two sizes
        long saleAmount = Math.min(newOrder.getSize(), listOrder.getSize());
        newOrder.setSize(newOrder.getSize() - saleAmount);
        listOrder.setSize(listOrder.getSize() - saleAmount);
    }
    
    static Order parseOrder(String line) {
        // This method parses the input string and returns an Order object
        final int BUY = 0;
        final int SELL = 1; 
        
        String[] input = line.split(" ");
        long orderId = Long.parseLong(input[0]);
        String product = input[1];
        int customerSide = input[2].equals("BUY") ? BUY : SELL;
        long size = Long.parseLong(input[3]);
        
        return new Order(orderId, product, customerSide, size);
    }
}

class Order {
    long orderId;
    String product;
    int customerSide; // 0 if Buyer, 1 if Seller
    long size;
    public Order(long orderId, String product, int customerSide, long size) {
        this.orderId = orderId;
        this.product = product;
        this.customerSide = customerSide;
        this.size = size;
    }
    
    public long getOrderId() {
        return this.orderId;
    }
    
    public String getProduct() {
        return this.product;
    }
    
    public int getCustomerSide() {
        return this.customerSide;
    }
    
    public long getSize() {
        return this.size;
    }
    
    public void setSize(long newSize) {
        this.size = newSize;
    }
    
    public void printOrder() {
        System.out.println("Order ID: " + this.orderId + " Product: " + this.product + " Customer Side: " + this.customerSide + " Size: " + this.size);
    }
}

