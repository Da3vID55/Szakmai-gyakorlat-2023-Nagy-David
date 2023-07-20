
export interface Data
{
  date:Date
  value:number
}

export interface Position
{
  X:number
  Y:number
}

export interface Point
{
  data:Data[]
  id:string
  pos:Position
}

const point1:Point = {
    data:[
      {date:new Date(2020,9,1),value:12},
      {date:new Date(2018,6,5),value:10},
      {date:new Date(2021,11,31),value:8},
      {date:new Date(2010,6,18),value:19},
      {date:new Date(2022,8,7),value:3},
      {date:new Date(2021,4,29),value:9},
      {date:new Date(2014,2,10),value:21},
    ],
    id:"1",
    pos:{X:30,Y:40},
}

const point2:Point = {
    data:[
      {date:new Date(2017,10,10),value:23},
      {date:new Date(2016,3,9),value:47},
      {date:new Date(2020,3,30),value:21},
      {date:new Date(2011,7,1),value:30},
    ],
    id:"2",
    pos:{X:45,Y:50},
}

const point3:Point = {
    data:[
      {date:new Date(2011,0,1),value:7},
      {date:new Date(2012,3,15),value:12},
      {date:new Date(2013,6,25),value:3},
      {date:new Date(2014,9,10),value:19},
      {date:new Date(2015,11,31),value:5},
      {date:new Date(2016,2,5),value:14},
      {date:new Date(2017,4,20),value:9},
      {date:new Date(2018,7,8),value:2},
      {date:new Date(2019,10,18),value:11},
      {date:new Date(2020,1,28),value:6},
    ],
    id:"3",
    pos:{X:10,Y:70},
}

const point4:Point = {
  data: [
    {date: new Date(2016, 2, 15), value: 8},
    {date: new Date(2017, 5, 10), value: 12},
    {date: new Date(2018, 8, 20), value: 4},
    {date: new Date(2019, 11, 5), value: 15},
    {date: new Date(2020, 1, 28), value: 7},
    {date: new Date(2021, 4, 22), value: 9},
    {date: new Date(2022, 6, 18), value: 11},
  ],
  id:"4",
  pos:{X:80,Y:20},
}

const point5:Point =
{
  data: [
    {date: new Date(2014, 6, 12), value: 8},
    {date: new Date(2018, 2, 25), value: 12},
    {date: new Date(2015, 11, 7), value: 4},
    {date: new Date(2022, 4, 15), value: 15},
    {date: new Date(2019, 8, 28), value: 7},
    {date: new Date(2023, 10, 22), value: 9},
    {date: new Date(2016, 3, 18), value: 11},
    {date: new Date(2013, 1, 9), value: 6},
    {date: new Date(2020, 5, 31), value: 3},
    {date: new Date(2021, 9, 20), value: 14},
  ],
  id:"5",
  pos:{X:70,Y:75},
}

export const points:Point[] = [point1, point2, point3, point4, point5,]