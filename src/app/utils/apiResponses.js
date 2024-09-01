import { NextResponse } from "next/server";

/**
 * Creates a standardized error response
 * @param {string} message - The error message
 * @param {number} status - The HTTP status code (default: 400)
 * @param {object} additionalData - Any additional data to include in the response
 * @returns {NextResponse} A NextResponse object with the error details
 */
export function errorResponse(message, status = 200, additionalData = {}) {
  return NextResponse.json(
    {
      success: false,
      error: message,
      ...additionalData,
    },
    { status }
  );
}

/**
 * Creates a standardized success response
 * @param {object} data - The data to be sent in the response
 * @param {number} status - The HTTP status code (default: 200)
 * @returns {NextResponse} A NextResponse object with the success details
 */
export function successResponse(data, status = 200) {
  return NextResponse.json(
    {
      success: true,
      data,
    },
    { status }
  );
}
