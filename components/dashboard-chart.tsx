"use client";

import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { Plugin } from "chart.js";
import { Dispatch, SetStateAction, useState } from "react";

export default function DashboardChart() {
  return (
    <>
      {Array.from({ length: 4 }, (_, index) => (
        <ChartCard key={index} />
      ))}
    </>
  );
}

function ChartCard() {
  const plugins: Plugin<"doughnut"> = {
    id: "custom_canvas_background_color",
    beforeDraw: function (chart, args, options) {
      var width = chart.width,
        height = chart.height,
        ctx = chart.ctx;
      ctx.restore();
      var fontSize = (height / 160).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "top";
      var text = "Total 23k",
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;
      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  };
  return (
    <div className="bg-background px-8 py-3 rounded-md">
      <span className="text-sm font-medium tracking-tight">Orders</span>
      <div className="relative mb-2">
        <Doughnut
          width={150}
          height={150}
          options={{ responsive: true }}
          plugins={[plugins]}
          className="text-black/[.8]"
          data={{
            datasets: [
              {
                data: [300, 200, 50],
                backgroundColor: [
                  "rgb(255, 99, 132)",
                  "rgb(54, 162, 235)",
                  "rgb(255, 205, 86)",
                ],
                hoverOffset: 4,
              },
            ],
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="inline-flex shadow justify-between px-2 py-px bg-gradient-to-r from-transparent rounded-md border to-[rgb(255_205_86)] ">
          Upcoming
          <span>30</span>
        </span>
        <span className="inline-flex shadow justify-between px-2 py-px bg-gradient-to-r from-transparent rounded-md border to-[rgb(54_162_235)] ">
          Ongoing
          <span>200</span>
        </span>
        <span className="inline-flex shadow justify-between px-2 py-px bg-gradient-to-r from-transparent rounded-md border to-[rgb(255_99_132)] ">
          Completed
          <span>300</span>
        </span>
      </div>
    </div>
  );
}
