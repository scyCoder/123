package com.jrx.service.impl;

import com.jrx.dao.FoodDao;
import com.jrx.entity.Food;
import com.jrx.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Author: sunchuanyin
 * @Date: 2019/3/23 23:08
 * @Version 1.0
 */
@Service
public class FoodServiceImpl implements FoodService {

    @Autowired
    private FoodDao foodDao;
    @Override
    public List<Food> findAll() {
        return foodDao.findAll();
    }
}
