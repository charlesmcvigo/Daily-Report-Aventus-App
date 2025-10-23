const DailyReport = require("../models/daily_report.model");

exports.createDailyReport = async (req, res) => {
  try {
    const { date, task, assisted_deptOrUser, status, remarks } = req.body;
    const author = req.user._id;

    const newReport = new DailyReport({
      author,
      date,
      task,
      assisted_deptOrUser,
      status,
      remarks,
    });

    console.log("   New Report:", newReport);
    await newReport.save();
    res.status(201).json({
      message: "Daily report created successfully!",
      report: newReport,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: err.message || "Error creating daily report!" });
  }
};

exports.getAllDailyReports = async (req, res) => {
  try {
    const user = req.user;
    const dailyReports = await DailyReport.find({ author: user._id });
    console.log("   Fetched Reports:", dailyReports);
    res.status(200).json(dailyReports);
  } catch (err) {
    res
      .status(500)
      .json({ message: err.message || "Error fetching daily reports!" });
  }
};

exports.getDailyReportsById = async (req, res) => {
  try {
    const reportId = req.params.id;
    const dailyReport = await DailyReport.findById(reportId);
    if (!dailyReport) {
      return res.status(404).json({ message: "Daily report not found!" });
    }
    res.status(200).json(dailyReport);
  } catch (err) {
    res
      .status(500)
      .json({ message: err.message || "Error fetching daily report!" });
  }
};

exports.updateDailyReport = async (req, res) => {
  try {
    const reportId = req.params.id;
    const updates = req.body;
    const updatedReport = await DailyReport.findByIdAndUpdate(
      reportId,
      updates,
      { new: true, runValidators: true }
    );

    if (!updatedReport) {
      return res.status(404).json({ message: "Daily report not found!" });
    }
    res.status(200).json({
      message: "Daily report updated successfully!",
      report: updatedReport,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: err.message || "Error updating daily report!" });
  }
};

exports.deleteDailyReport = async (req, res) => {
  try {
    const reportId = req.params.id;
    const deletedReport = await DailyReport.findByIdAndDelete(reportId);
    if (!deletedReport) {
      return res.status(404).json({ message: "Daily report not found!" });
    }
    res.status(200).json({ message: "Daily report deleted successfully!" });
  } catch (err) {
    res
      .status(500)
      .json({ message: err.message || "Error deleting daily report!" });
  }
};
