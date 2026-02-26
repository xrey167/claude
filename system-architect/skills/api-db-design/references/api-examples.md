# API Design Examples

## RESTful Resource API

### Users Resource
```
GET    /api/v1/users              List users (paginated)
GET    /api/v1/users/:id          Get user by ID
POST   /api/v1/users              Create user
PATCH  /api/v1/users/:id          Update user
DELETE /api/v1/users/:id          Delete user
GET    /api/v1/users/:id/orders   List user's orders
```

### Pagination (Cursor-Based)
```json
GET /api/v1/users?limit=20&cursor=eyJpZCI6MTAwfQ

Response:
{
  "data": [...],
  "pagination": {
    "next_cursor": "eyJpZCI6MTIwfQ",
    "has_more": true
  }
}
```

### Filtering & Sorting
```
GET /api/v1/users?status=active&role=admin&sort=-created_at&fields=id,name,email
```

### Error Response Format
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Request validation failed",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format",
        "value": "not-an-email"
      }
    ]
  }
}
```

### Authentication
```
# Bearer token
Authorization: Bearer <jwt-token>

# API key
X-API-Key: <api-key>
```

## Webhook API Design

### Registration
```json
POST /api/v1/webhooks
{
  "url": "https://example.com/webhook",
  "events": ["order.created", "order.updated"],
  "secret": "whsec_..."
}
```

### Webhook Payload
```json
{
  "id": "evt_123",
  "type": "order.created",
  "created_at": "2024-01-15T10:30:00Z",
  "data": {
    "order_id": "ord_456",
    "total": 99.99
  }
}
```

### Webhook Signature Verification
```
X-Webhook-Signature: sha256=<hmac-signature>
```
Compute HMAC-SHA256 of raw body with shared secret, compare to header.

## Rate Limiting Headers
```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1705312200
Retry-After: 60
```
