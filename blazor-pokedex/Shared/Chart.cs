using System.Collections.Generic;

public class Chart
{
    public string Type { get; set; }
    public List<List<object>> Data { get; set; }
    public string ElementId { get; set; }
    public string[][] Axes { get; set; }
}