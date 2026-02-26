const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const DB_FILE = './orders.json';

// Helper to read DB
function readOrders() {
  if (!fs.existsSync(DB_FILE)) return [];
  return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
}

// Helper to write DB
function writeOrders(orders) {
  fs.writeFileSync(DB_FILE, JSON.stringify(orders, null, 2));
}

app.post('/api/orders', (req, res) => {
  const order = req.body;
  const orders = readOrders();
  orders.push({ ...order, created_at: new Date().toISOString() });
  writeOrders(orders);
  res.json({ success: true, message: 'Order saved!' });
});

app.get('/api/orders', (req, res) => {
  res.json(readOrders());
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});