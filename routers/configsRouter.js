import { Router } from "express";
import supabase from "../utills/supabase.js";

export const configsRouter = Router();

configsRouter.get("/get-kpi-weight", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("configs")
      .select("departmental_kpi_weight, individual_kpi_weight");

    if (error) {
      throw error;
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching KPI weights:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
