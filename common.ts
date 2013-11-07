/**
 * Created by Tobias on 07.11.13.
 */

/// <reference path="common.d.ts" />


export module com.igz.bc.common.ajax {

    /**
     * Function Interface for AJAX Success Handler
     * @param {Object} data Data received from AJAX query
     * @param {String} textStatus AJAX status code
     * @param {Object} jqXHR jQuery XHR wrapper object
     */
    export interface AjaxSuccessHandler {
        (data:any, textStatus:string, jqXHR:JQueryXHR): void
    }

    export class Query {

        /**
         *
         * @param params
         */
        public static executeQuery(params:{
            transaction: string;
            parameters?: any;
            successFunction? (data:any, textStatus:string, jqXHR:JQueryXHR): void
            errorFunction? (jqXHR:JQueryXHR, textStatus:string, errorThrow:string): void;
            timeout?: number;
        }):void {

            var url = "Runner" + params.transaction;

            $.ajax(
                url,
                {
                    error: params.errorFunction,
                    success: params.successFunction
                }
            )

        }

    }
}


com.igz.bc.common.ajax.Query.executeQuery({
    transaction: "test123",
    parameters: {},
    successFunction: function (jsondata:any, status:string, xhr:JQueryXHR) {

    },
    errorFunction: callbackTest
});

function callbackTest(jqXHR:JQueryXHR, textStatus:string, errorThrow:string):void {

}
