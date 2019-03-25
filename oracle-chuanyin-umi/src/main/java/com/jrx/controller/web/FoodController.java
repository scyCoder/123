package com.jrx.controller.web;

import com.jrx.entity.Food;
import com.jrx.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Controller
 * @Author: sunchuanyin
 * @Date: 2019/3/23 23:07
 * @Version 1.0
 */
@RestController
@RequestMapping("/food")
public class FoodController {

    @Autowired
    private FoodService foodService;

    /**
     * 查询食物表，获得全部的食物统计结果
     * @return
     */
    @RequestMapping("/findAll")
    @CrossOrigin(origins = "http://localhost:8000", allowCredentials = "true")
    public List<Food> findAll() {
        return foodService.findAll();
    }

}
