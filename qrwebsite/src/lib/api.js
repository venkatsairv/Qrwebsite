const API_BASE_URL = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "") ?? "";

async function parseResponse(response) {
  const contentType = response.headers.get("content-type") ?? "";

  if (!response.ok) {
    let message = "Request failed";

    if (contentType.includes("application/json")) {
      const data = await response.json();
      message = data.message ?? data.error ?? JSON.stringify(data);
    } else {
      const text = await response.text();
      message = text || message;
    }

    throw new Error(message);
  }

  if (contentType.includes("application/json")) {
    return response.json();
  }

  return response;
}

export async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      ...(options.body instanceof FormData ? {} : { "Content-Type": "application/json" }),
      ...(options.headers ?? {}),
    },
    ...options,
  });

  return parseResponse(response);
}

export function withAuth(token) {
  return token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};
}

