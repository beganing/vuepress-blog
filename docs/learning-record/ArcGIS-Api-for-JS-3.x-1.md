---
title: 1. 加载天地图
date: 2024/09/23
tags:
  - ArcGIS
categories:
  - WebGIS
---

## 1. 实例

### 1.1. 代码

```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta
      name="viewport"
      content="initial-scale=1, maximum-scale=1,user-scalable=no"
    />
    <title>test</title>
    <link
      rel="stylesheet"
      href="https://js.arcgis.com/3.31/esri/css/esri.css"
    />
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <style>
      html,
      body,
      #map {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
    <script src="https://js.arcgis.com/3.31/"></script>
    <script>
      require([
        'esri/map',
        'esri/layers/WebTiledLayer',
        'esri/layers/TileInfo',
        'esri/geometry/Point',
        'esri/layers/ArcGISDynamicMapServiceLayer',
        'esri/dijit/OverviewMap',
        'dojo/domReady!',
      ], function (
        Map,
        WebTiledLayer,
        TileInfo,
        Point,
        ArcGISDynamicMapServiceLayer,
        OverviewMap
      ) {
        var map = new Map('map', {
          center: [0, 0],
          zoom: 0,
        });

        var tileInfo = new TileInfo({
          dpi: 90.71428571427429,
          rows: 256,
          cols: 256,
          compressionQuality: 0,
          origin: {
            x: -180,
            y: 90,
          },
          spatialReference: {
            wkid: 4326,
          },
          lods: [
            {
              level: 2,
              levelValue: 2,
              resolution: 0.3515625,
              scale: 147748796.52937502,
            },
            {
              level: 3,
              levelValue: 3,
              resolution: 0.17578125,
              scale: 73874398.264687508,
            },
            {
              level: 4,
              levelValue: 4,
              resolution: 0.087890625,
              scale: 36937199.132343754,
            },
            {
              level: 5,
              levelValue: 5,
              resolution: 0.0439453125,
              scale: 18468599.566171877,
            },
            {
              level: 6,
              levelValue: 6,
              resolution: 0.02197265625,
              scale: 9234299.7830859385,
            },
            {
              level: 7,
              levelValue: 7,
              resolution: 0.010986328125,
              scale: 4617149.8915429693,
            },
            {
              level: 8,
              levelValue: 8,
              resolution: 0.0054931640625,
              scale: 2308574.9457714846,
            },
            {
              level: 9,
              levelValue: 9,
              resolution: 0.00274658203125,
              scale: 1154287.4728857423,
            },
            {
              level: 10,
              levelValue: 10,
              resolution: 0.001373291015625,
              scale: 577143.73644287116,
            },
            {
              level: 11,
              levelValue: 11,
              resolution: 0.0006866455078125,
              scale: 288571.86822143558,
            },
            {
              level: 12,
              levelValue: 12,
              resolution: 0.00034332275390625,
              scale: 144285.93411071779,
            },
            {
              level: 13,
              levelValue: 13,
              resolution: 0.000171661376953125,
              scale: 72142.967055358895,
            },
            {
              level: 14,
              levelValue: 14,
              resolution: 8.58306884765625e-5,
              scale: 36071.483527679447,
            },
            {
              level: 15,
              levelValue: 15,
              resolution: 4.291534423828125e-5,
              scale: 18035.741763839724,
            },
            {
              level: 16,
              levelValue: 16,
              resolution: 2.1457672119140625e-5,
              scale: 9017.8708819198619,
            },
            {
              level: 17,
              levelValue: 17,
              resolution: 1.0728836059570313e-5,
              scale: 4508.9354409599309,
            },
            {
              level: 18,
              levelValue: 18,
              resolution: 5.3644180297851563e-6,
              scale: 2254.4677204799655,
            },
            {
              level: 19,
              levelValue: 19,
              resolution: 2.68220901489257815e-6,
              scale: 1127.23386023998275,
            },
            {
              level: 20,
              levelValue: 2,
              resolution: 1.341104507446289075e-6,
              scale: 563.616930119991375,
            },
          ],
        });

        var vecLayer = new WebTiledLayer(
          'http://{subDomain}.tianditu.com/DataServer?T=vec_c&x={col}&y={row}&l={level}&tk=3fc715d47bc5243b5230875b4fe84a65',
          {
            subDomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
            tileInfo: tileInfo,
          }
        );
        var labelLayer = new WebTiledLayer(
          'http://{subDomain}.tianditu.com/DataServer?T=cva_c&x={col}&y={row}&l={level}&tk=3fc715d47bc5243b5230875b4fe84a65',
          {
            subDomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
            tileInfo: tileInfo,
          }
        );
        map.addLayer(vecLayer);
        map.addLayer(labelLayer);

        map.centerAndZoom(
          new Point({
            x: 120.429961458006,
            y: 36.855850355488756,
            spatialReference: {
              wkid: 4326,
            },
          }),
          9
        );

        var overviewMapDijit = new OverviewMap({
          map: map,
          visible: true,
        });
        overviewMapDijit.startup(); //鹰眼
      });
    </script>
  </head>

  <body>
    <div id="map"></div>
  </body>
</html>
```

### 1.2. 结果展示

![alt text](./images/ArcGIS-Api-for-JS-3.x-1/image1.png)

### 1.3. 注意

> 经测试

在`new Map`时, 直接设置`zoom`和`center`参数没有生效, 地图显示空白

所以在后面使用`centerAndZoom`方法定位到需要的视角位置

## 2. 参考

[ArcGIS API for JavaScript 3.X 加载天地图](https://blog.csdn.net/qq_32492777/article/details/111558755)
