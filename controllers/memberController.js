const Member = require('../models/member');

exports.registerMember = async (req, res) => {
  try {
    const newMember = new Member(req.body);
    await newMember.save();
    res.status(201).json({ message: 'Member registered' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
