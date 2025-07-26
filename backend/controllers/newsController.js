const mongoose = require('mongoose')
const General = require('../models/General')
const Business = require('../models/Business')
const Entertainment = require('../models/Entertainment')
const Health = require('../models/Health')
const Technology = require('../models/Technology')

// Get all news from all categories
exports.getAllNews = async (req, res) => {
  try {
    const [general, business, entertainment, health, technology] = await Promise.all([
      General.find(),
      Business.find(),
      Entertainment.find(),
      Health.find(),
      Technology.find()
    ])

    const allNews = [
      ...general,
      ...business,
      ...entertainment,
      ...health,
      ...technology
    ]

    res.json(allNews)
  } catch (err) {
    console.error('❌ getAllNews error:', err.message)
    res.status(500).json({ message: 'Error fetching all news', error: err.message })
  }
}

// Get news by category (e.g., /api/news/business)
exports.getCategoryNews = async (req, res) => {
  const category = req.params.category?.toLowerCase()

  const modelMap = {
    general: General,
    business: Business,
    entertainment: Entertainment,
    health: Health,
    technology: Technology
  }

  const Model = modelMap[category]

  if (!Model) {
    return res.status(404).json({ message: 'Category not found' })
  }

  try {
    const data = await Model.find()
    res.json(data)
  } catch (err) {
    console.error(`❌ Error fetching ${category} news:`, err.message)
    res.status(500).json({ message: 'Error fetching category news', error: err.message })
  }
}

// Get single news item by ID (search all collections)
exports.getNewsById = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid ID format' })
  }

  const models = [General, Business, Entertainment, Health, Technology]

  try {
    for (const model of models) {
      const news = await model.findById(id)
      if (news) {
        return res.json(news)
      }
    }

    res.status(404).json({ message: 'News not found in any category' })
  } catch (err) {
    console.error('❌ Error fetching news by ID:', err.message)
    res.status(500).json({ error: 'Server error', message: err.message })
  }
}
