package com.jrx.dao;

import com.jrx.entity.Food;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @Author: sunchuanyin
 * @Date: 2019/3/23 23:10
 * @Version 1.0
 */
public interface FoodDao extends JpaRepository<Food, Integer> {
}
