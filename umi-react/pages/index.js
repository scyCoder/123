import React from 'react'
import G2 from '@antv/g2';
import axios from 'axios'

class MyChart extends React.Component {

    async componentDidMount() {
        // 定义一个数组，用来接收异步请求响应的数据
        const state = {
            users: []
        }

        /**
         * 发送axios异步请求，跨域访问后台发送的数据
         */
        await axios.post("http://localhost:8080/food/findAll", {
            params: {
                'withCredentials': true
            }
        })
            .then(function (response) {

               /*  for (var i = 0; i < response.data.length; i++) {
                    state.users.push(response.data[i])
                } */
                state.users = response.data;

            })

        this.createChart(state.users)
    }

    /**
     * 创建图表
     * @param {} arr 
     */
    createChart(arr) {

        // 定义一个数组，用来存放指定的对象
        const data = []
        for (let i = 0; i < arr.length; i++) {
            // 定义数组中指定存放的对象
            const food = {}
            food.genre = arr[i].food_name;
            food.sold = arr[i].food_number
            data.push(food)
        }
        // 测试数据
        /* const data = [
            { genre: 'Sports', sold: 275 },
            { genre: 'Strategy', sold: 115 },
            { genre: 'Action', sold: 120 },
            { genre: 'Shooter', sold: 350 },
            { genre: 'Other', sold: 150 }
        ]; */ // G2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
        // Step 1: 创建 Chart 对象
        const chart = new G2.Chart({
            container: "a", // 指定图表容器 ID
            width: 600, // 指定图表宽度
            height: 300 // 指定图表高度
        });
        // Step 2: 载入数据源
        chart.source(data);
        // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
        chart.interval().position('genre*sold').color('genre')
        // Step 4: 渲染图表
        chart.render();
    }
    render() {
        return (
            <div id="a">
            </div>
        )

    }
}

export default MyChart
