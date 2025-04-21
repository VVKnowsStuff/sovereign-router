export default function handler(req, res) {
  const newBase = "https://f18c-209-14-239-77.ngrok-free.app"; // your current ngrok URL
  const fullPath = `${newBase}${req.url}`;
  res.redirect(307, fullPath);
}
