package data;

//public record Product(
//        int id,
//        String item_type,
//        String brand,
//        String color,
//        float size,
//        float price,
//        int quantity,
//        String item_img_id
//) {
//    public Product() {
//        this();
//    };
//}

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Product {
    public int id;
    public String item_type;
    public String brand;
    public String color;
    public float size;
    public float price;
    public int quantity;
    String item_img_i;
    public Product() {};
}
