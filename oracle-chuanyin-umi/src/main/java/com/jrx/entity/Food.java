package com.jrx.entity;

import javax.persistence.*;
import java.io.Serializable;

/**
 * @Author: sunchuanyin
 * @Date: 2019/3/23 23:00
 * @Version 1.0
 */

@Table(name = "tb_food")
@Entity
public class Food implements Serializable {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "food_name")
    private String food_name;
    @Column(name = "food_number")
    private Integer food_number;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFood_name() {
        return food_name;
    }

    public void setFood_name(String food_name) {
        this.food_name = food_name;
    }

    public Integer getFood_number() {
        return food_number;
    }

    public void setFood_number(Integer food_number) {
        this.food_number = food_number;
    }

    @Override
    public String toString() {
        return "Food{" +
                "id=" + id +
                ", food_name='" + food_name + '\'' +
                ", food_number=" + food_number +
                '}';
    }
}
