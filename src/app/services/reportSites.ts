import { Injectable } from '@angular/core';

@Injectable()
export class ReportsService {
  private data = [
    {
      id: '31829331',
      name: 'Customer Packing Slips',
      description:
        'Explore detailed cooking reports to optimize your culinary operations. Gain insights into ingredient usage, recipe performance, and cooking techniques. Enhance menu planning, improve kitchen efficiency, and deliver exceptional culinary experiences to your customers.',
      image: '/assets/images/ic-packing.svg',
      reportsData: [
        {
          id: '3182931',
          name: 'Ingredient Analysis',
          description:
            'Delve into ingredient analysis reports to understand ingredient trends.',
        },
        {
          id: '318293321',
          name: 'Recipe Performance',
          description:
            'Analyze recipe performance metrics to identify popular dishes.',
        },
        {
          id: '3182935321',
          name: 'Cooking Techniques',
          description: 'Explore cooking techniques reports to master.',
        },
        {
          id: '3182931',
          name: 'Menu Optimization',
          description: 'Optimize your menu with insightful reports on dish.',
        },
        {
          id: '3182931',
          name: 'Ingredient Analysis',
          description:
            'Delve into ingredient analysis reports to understand ingredient trends.',
        },
        {
          id: '318293321',
          name: 'Recipe Performance',
          description:
            'Analyze recipe performance metrics to identify popular dishes.',
        },
        {
          id: '3182935321',
          name: 'Cooking Techniques',
          description: 'Explore cooking techniques reports to master.',
        },
        {
          id: '3182931',
          name: 'Menu Optimization',
          description: 'Optimize your menu with insightful reports on dish.',
        },
      ],
    },
    {
      id: '3182931',
      name: 'Cooking Reports',
      description:
        'Explore detailed cooking reports to optimize your culinary operations. Gain insights into ingredient usage, recipe performance, and cooking techniques. Enhance menu planning, improve kitchen efficiency, and deliver exceptional culinary experiences to your customers.',
      image: '/assets/images/ic-cooking.svg',
      reportsData: [
        {
          id: '3182931',
          name: 'Ingredient Analysis',
          description:
            'Delve into ingredient analysis reports to understand ingredient trends.',
        },
        {
          id: '318293321',
          name: 'Recipe Performance',
          description:
            'Analyze recipe performance metrics to identify popular dishes.',
        },
        {
          id: '3182935321',
          name: 'Cooking Techniques',
          description: 'Explore cooking techniques reports to master.',
        },
        {
          id: '3182931',
          name: 'Menu Optimization',
          description: 'Optimize your menu with insightful reports on dish.',
        },
        {
          id: '3182931',
          name: 'Ingredient Analysis',
          description:
            'Delve into ingredient analysis reports to understand ingredient trends.',
        },
        {
          id: '318293321',
          name: 'Recipe Performance',
          description:
            'Analyze recipe performance metrics to identify popular dishes.',
        },
        {
          id: '3182935321',
          name: 'Cooking Techniques',
          description: 'Explore cooking techniques reports to master.',
        },
        {
          id: '3182931',
          name: 'Menu Optimization',
          description: 'Optimize your menu with insightful reports on dish.',
        },
      ],
    },

    {
      id: '321312242',
      name: 'Tip Reports',
      description:
        'Discover insightful tip reports to optimize your service and enhance customer satisfaction. Dive into data-driven tips analysis to understand customer preferences, improve staff performance, and boost revenue through exceptional service experiences.',
      image: '/assets/images/ic-tips.svg',
      reportsData: [
        {
          id: '3182931',
          name: 'Ingredient Analysis',
          description:
            'Delve into ingredient analysis reports to understand ingredient trends.',
        },
        {
          id: '318293321',
          name: 'Recipe Performance',
          description:
            'Analyze recipe performance metrics to identify popular dishes.',
        },
        {
          id: '3182935321',
          name: 'Cooking Techniques',
          description: 'Explore cooking techniques reports to master.',
        },
        {
          id: '3182931',
          name: 'Menu Optimization',
          description: 'Optimize your menu with insightful reports on dish.',
        },
        {
          id: '3182931',
          name: 'Ingredient Analysis',
          description:
            'Delve into ingredient analysis reports to understand ingredient trends.',
        },
        {
          id: '318293321',
          name: 'Recipe Performance',
          description:
            'Analyze recipe performance metrics to identify popular dishes.',
        },
        {
          id: '3182935321',
          name: 'Cooking Techniques',
          description: 'Explore cooking techniques reports to master.',
        },
        {
          id: '3182931',
          name: 'Menu Optimization',
          description: 'Optimize your menu with insightful reports on dish.',
        },
      ],
    },
    {
      id: '65465',
      name: 'Ingredients Reports',
      description:
        'Unlock the power of ingredients reports to optimize your kitchen operations and elevate culinary creations. Explore comprehensive insights into ingredient usage, sourcing, costs, and trends to enhance menu planning, manage inventory effectively, and ensure culinary excellence.',
      image: '/assets/images/ic-ingredients.svg',
      url: '65465',
      reportsData: [
        {
          id: '3182931',
          name: 'Ingredient Analysis',
          description:
            'Delve into ingredient analysis reports to understand ingredient trends.',
        },
        {
          id: '318293321',
          name: 'Recipe Performance',
          description:
            'Analyze recipe performance metrics to identify popular dishes.',
        },
        {
          id: '3182935321',
          name: 'Cooking Techniques',
          description: 'Explore cooking techniques reports to master.',
        },
        {
          id: '3182931',
          name: 'Menu Optimization',
          description: 'Optimize your menu with insightful reports on dish.',
        },
        {
          id: '3182931',
          name: 'Ingredient Analysis',
          description:
            'Delve into ingredient analysis reports to understand ingredient trends.',
        },
        {
          id: '318293321',
          name: 'Recipe Performance',
          description:
            'Analyze recipe performance metrics to identify popular dishes.',
        },
        {
          id: '3182935321',
          name: 'Cooking Techniques',
          description: 'Explore cooking techniques reports to master.',
        },
        {
          id: '3182931',
          name: 'Menu Optimization',
          description: 'Optimize your menu with insightful reports on dish.',
        },
      ],
    },
    {
      id: '4567',
      name: 'Revenue Reports',
      description: `Harness the power of revenue reports to gain deep insights into your business's financial performance and drive strategic decision-making. Analyze revenue streams, track sales trends, identify growth opportunities, and optimize pricing strategies to maximize profitability and sustainable growth.`,
      image: '/assets/images/ic-revenue.svg',
      url: '4567',
      reportsData: [
        {
          id: '3182931',
          name: 'Ingredient Analysis',
          description:
            'Delve into ingredient analysis reports to understand ingredient trends.',
        },
        {
          id: '318293321',
          name: 'Recipe Performance',
          description:
            'Analyze recipe performance metrics to identify popular dishes.',
        },
        {
          id: '3182935321',
          name: 'Cooking Techniques',
          description: 'Explore cooking techniques reports to master.',
        },
        {
          id: '3182931',
          name: 'Menu Optimization',
          description: 'Optimize your menu with insightful reports on dish.',
        },
        {
          id: '3182931',
          name: 'Ingredient Analysis',
          description:
            'Delve into ingredient analysis reports to understand ingredient trends.',
        },
        {
          id: '318293321',
          name: 'Recipe Performance',
          description:
            'Analyze recipe performance metrics to identify popular dishes.',
        },
        {
          id: '3182935321',
          name: 'Cooking Techniques',
          description: 'Explore cooking techniques reports to master.',
        },
        {
          id: '3182931',
          name: 'Menu Optimization',
          description: 'Optimize your menu with insightful reports on dish.',
        },
      ],
    },
    {
      id: '32423443',
      name: 'Route Reports',
      description: `Optimize your business's logistics and delivery operations with route reports. Gain valuable insights into delivery routes, efficiency metrics, and transportation costs. Streamline your delivery processes, improve delivery times, and enhance customer satisfaction with data-driven route optimization strategies.`,
      image: '/assets/images/ic-route.svg',
      url: '32423443',
      reportsData: [
        {
          id: '3182931',
          name: 'Ingredient Analysis',
          description:
            'Delve into ingredient analysis reports to understand ingredient trends.',
        },
        {
          id: '318293321',
          name: 'Recipe Performance',
          description:
            'Analyze recipe performance metrics to identify popular dishes.',
        },
        {
          id: '3182935321',
          name: 'Cooking Techniques',
          description: 'Explore cooking techniques reports to master.',
        },
        {
          id: '3182931',
          name: 'Menu Optimization',
          description: 'Optimize your menu with insightful reports on dish.',
        },
        {
          id: '3182931',
          name: 'Ingredient Analysis',
          description:
            'Delve into ingredient analysis reports to understand ingredient trends.',
        },
        {
          id: '318293321',
          name: 'Recipe Performance',
          description:
            'Analyze recipe performance metrics to identify popular dishes.',
        },
        {
          id: '3182935321',
          name: 'Cooking Techniques',
          description: 'Explore cooking techniques reports to master.',
        },
        {
          id: '3182931',
          name: 'Menu Optimization',
          description: 'Optimize your menu with insightful reports on dish.',
        },
      ],
    },
  ];

  getData() {
    return this.data;
  }

  getSitesCards() {
    return Promise.resolve(this.getData());
  }

  getReportsById(ids: string[]) {
    return Promise.resolve(
      this.getData().flatMap((report) => {
        if (ids.includes(report.id)) {
          if (report.reportsData) {
            return report.reportsData;
          } else {
            return [report];
          }
        } else {
          return [];
        }
      })
    );
  }
}
