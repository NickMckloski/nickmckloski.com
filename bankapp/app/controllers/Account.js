﻿(function () {
    'use strict';

    angular.module('app', ['ngCookies', 'chart.js']).controller('Account', ['$cookies', account]);

    function account($cookies) {
        var controller = this;

        controller.entries = [];
        //load entries from cookies or set it to blank array
        if (typeof $cookies.get('entries') == 'string') {
            var json = (JSON.parse($cookies.get('entries')));
            controller.entries = json;
        }

        //function to add a new entry
        controller.addEntry = function () {

            //nested function to format date object to string
            function formatDate (date) {
                return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
            }

            controller.entries.push({ name: controller.formEntryName, date: controller.formEntryDate == null ? formatDate(new Date()) : formatDate(controller.formEntryDate), type: controller.formEntryType, cost: (controller.formEntryCost).formatMoney(2) });
            //save entries into cookies
            $cookies.put('entries', JSON.stringify(controller.entries));
        }

        //function to remove an entry
        controller.removeEntry = function (entry) {
            for (var i = 0; i < controller.entries.length; i++) {
                if (controller.entries[i] == entry) {
                    controller.entries.splice(i, 1);
                }
            }
            $cookies.put('entries', JSON.stringify(controller.entries));
        }

        //function to get balance of all entries
        controller.balance = function () {
            var total = 0;
            for (var i = 0; i < controller.entries.length; i++) {
                var entry = controller.entries[i];
                if(entry.type == "Income")
                    total += parseFloat(entry.cost.replace('$', '').replace(/,/g, ''));
                else
                    total -= parseFloat(entry.cost.replace('$', '').replace(/,/g, ''));
            }

            return Number(total).formatMoney(2);
        }

        //variable to detect if browser supports date input
        controller.cantInputDate = function () {
            var input = document.createElement('input');
            input.setAttribute('type', 'date');

            var notADateValue = 'not-a-date';
            input.setAttribute('value', notADateValue);

            return (input.value === notADateValue);
        }


        /*overview chart data*/
        //chart labels
        controller.overviewLabels = ["Income", "Expenses"];
        //chart colors
        controller.overviewColors = ['#009933', '#ff3300'];
        //chart data
        controller.overviewData = [];
        //function to populate the chart data
        controller.getOverviewData = function () {
            //clear data
            controller.overviewData.length = 0;
            var income = 0;
            var expenses = 0;
            //find values
            for (var i = 0; i < controller.entries.length; i++) {
                var entry = controller.entries[i];
                if(entry.type == "Income")
                    income += (parseFloat(entry.cost.replace('$', '').replace(/,/g, '')));
                else
                    expenses += (parseFloat(entry.cost.replace('$', '').replace(/,/g, '')));
            }
            //add values to data array
            controller.overviewData.push(income);
            controller.overviewData.push(expenses);
            return controller.overviewData;
        }



        /*income chart data*/
        //chart labels
        controller.incomeLabels = [];
        //function to populate the chart labels
        controller.getIncomeLabels = function () {
            //clear data
            controller.incomeLabels.length = 0;
            //find values
            for (var i = 0; i < controller.entries.length; i++) {
                var entry = controller.entries[i];
                if (entry.type == "Income")
                    controller.incomeLabels.push(entry.name);
            }
            return controller.incomeLabels;
        }
        //chart data
        controller.incomeData = [];
        //function to populate the chart data
        controller.getIncomeData = function () {
            //clear data
            controller.incomeData.length = 0;
            //find values
            for (var i = 0; i < controller.entries.length; i++) {
                var entry = controller.entries[i];
                if (entry.type == "Income")
                    controller.incomeData.push(parseFloat(entry.cost.replace('$', '').replace(/,/g, '')));
            }
            console.log(controller.incomeData);
            return controller.incomeData;
        }



        /*expenses chart data*/
        //chart labels
        controller.expensesLabels = [];
        //function to populate the chart labels
        controller.getExpensesLabels = function () {
            //clear data
            controller.expensesLabels.length = 0;
            //find values
            for (var i = 0; i < controller.entries.length; i++) {
                var entry = controller.entries[i];
                if (entry.type == "Expense")
                    controller.expensesLabels.push(entry.name);
            }
            return controller.expensesLabels;
        }
        //chart data
        controller.expensesData = [];
        //function to populate the chart data
        controller.getExpensesData = function () {
            //clear data
            controller.expensesData.length = 0;
            //find values
            for (var i = 0; i < controller.entries.length; i++) {
                var entry = controller.entries[i];
                if (entry.type == "Expense")
                    controller.expensesData.push(parseFloat(entry.cost.replace('$', '').replace(/,/g, '')));
            }
            return controller.expensesData;
        }
    }

})();
