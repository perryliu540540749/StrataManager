export default function handler(req, res) {
  res.status(200).json({ monthlyFee: 250, dueDate: '2025-05-30' });
}
